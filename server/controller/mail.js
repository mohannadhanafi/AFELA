const { mail, users, notifications } = require('../database/models');
const socket = require('../socket');

exports.post = async (request, response) => {
  try {
    const { rule } = request;
    const data = request.body;
    mail.create(data).then(async () => {
      const adminUsers = await users.findAll({
        where: { rule: 'admin' },
        raw: true,
      });
      if (rule !== 'admin') {
        adminUsers.map(async (admin) => {
          const { id: adminId } = admin;
          await notifications.create({
            text: `New Email arrived from ${data.name}`,
            seen: false,
            user_id: adminId,
          });
        });
        socket.io.emit('newEmail', {
          message: `New Email arrived from ${data.name}`,
        });
      }
    });
    response.status(200).send({ message: 'Email has been sent, Thank you' });
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};

exports.get = async (request, response) => {
  try {
    const emailList = await mail.findAll({ order: [['id', 'DESC']] });
    response.status(200).send(emailList);
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};

exports.editRead = async (request, response) => {
  try {
    const { id } = request.body;
    await mail.update({ read: true }, { where: { id } });
    response.status(200);
  } catch (error) {
    response.status(500);
  }
};
exports.editStarred = async (request, response) => {
  try {
    const { starred, id } = request.body;
    await mail.update({ starred: !starred }, { where: { id } });
    response.status(200).send({ message: 'Mail has been updated' });
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};
exports.editImportant = async (request, response) => {
  try {
    const { important, id } = request.body;
    await mail.update({ important: !important }, { where: { id } });
    response.status(200).send({ message: 'Mail has been updated' });
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};


exports.editDeleted = async (request, response) => {
  try {
    const { deleted, id } = request.body;
    if (deleted) {
      await mail.update({ deleted: !deleted, folder: 0 }, { where: { id } });
      return response.status(200).send({ message: 'Mail has been updated' });
    }
    await mail.update({ deleted: !deleted, folder: 1 }, { where: { id } });
    return response.status(200).send({ message: 'Mail has been updated' });
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};

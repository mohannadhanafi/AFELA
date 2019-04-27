const { homeLayout } = require('../database/models');

exports.get = async (req, res) => {
  try {
    const result = await homeLayout.findAll({
      order: [['position', 'ASC']],
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.update = async (req, res) => {
  try {
    const newData = req.body;
    await Promise.all(newData.map(async (layout) => {
      await homeLayout.update(layout, { where: { id: layout.id } });
    }));
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.body;
    await homeLayout.destroy({ where: { id } });
    res.status(200).send({ message: 'Deleted !' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

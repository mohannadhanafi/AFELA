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
    console.log(newData);

    await Promise.all(newData.map(async (layout) => {
      await homeLayout.update(layout, { where: { id: layout.id } });
    }));
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const { homeLayout, categories } = require('../database/models');

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
    res.status(200).send({ message: 'Updated' });
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

exports.post = async (req, res) => {
  try {
    const {
      obj,
    } = req.body;
    const {
      catName: seo, layout_number, type, threecats,
    } = obj;
    const maxPosition = await homeLayout.max('position');
    const position = maxPosition + 1;
    if (type === 'category') {
      const categoryName = await categories.findOne({
        attributes: ['name'],
        where: { seo },
        raw: true,
      });
      const { name } = categoryName;
      homeLayout.create({
        seo, layout_number, type, position, name,
      }).then((result) => {
        res.status(200).send(result);
      });
    } else {
      const threeCatsNames = await Promise.all(threecats.map(async (seo) => {
        const categoryName = await categories.findOne({
          attributes: ['name'],
          where: { seo },
          raw: true,
        });
        const { name } = categoryName;
        return name;
      }));
      homeLayout.create({
        type: 'component', position, threecats: threeCatsNames, name: type, threecatsseo: threecats,
      }).then((result) => {
        res.status(200).send(result);
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

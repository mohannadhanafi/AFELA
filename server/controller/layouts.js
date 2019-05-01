/* eslint-disable camelcase */
const { homeLayout, categories, threeColumns } = require('../database/models');

exports.get = async (req, res) => {
  try {
    const result = await homeLayout.findAll({
      order: [['position', 'ASC']],
      include: [{ model: categories }, { model: threeColumns, include: [{ model: categories }] }],
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);

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
      catName: seo, layout_number, type, threecats, catId,
    } = obj;
    const maxPosition = await homeLayout.max('position');
    const position = maxPosition + 1;
    if (type === 'category') {
      homeLayout.create({
        seo, layout_number, type, position, category_id: catId,
      }).then((result) => {
        res.status(200).send(result);
      });
    } else {
      const createResult = await homeLayout.create({
        type: 'component', position, threecats, name: type, threecatsseo: threecats,
      }, { raw: true, returning: true });
      const resultData = createResult.get({ plain: true });
      const { id: homeId } = resultData;
      await Promise.all(threecats.map(async (id) => {
        await threeColumns.create({
          homepage_id: homeId,
          category_id: id,
        });
      }));
      res.status(200).send(createResult);
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

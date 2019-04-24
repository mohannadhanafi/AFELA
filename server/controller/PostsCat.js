/* eslint-disable camelcase */
// const { posts, categories } = require('../database/models');
// var querystring = require('querystring');
const Sequelize = require('../database/config');
const { posts, categories, users } = require('../database/models');

exports.get = async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const offSetValue = parseInt(offset, 10) * 5;
    const { seo_name: seo } = req.params;
    const cat = await categories.findOne({ where: { seo }, raw: true });
    if (cat) {
      const { id } = cat;
      const childId = await categories.findAll({
        where: { parent: id }, attributes: ['id'], raw: true, order: [['id', 'DESC']],
      });
      const idArray = [];
      childId.map((element) => {
        idArray.push(element.id);
      });
      idArray.push(id);
      if (limit && offset) {
        const result = await posts.findAndCountAll(
          {
            where: { category_id: idArray, approve: true },
            include: [
              {
                model: categories,
                attributes: [['name', 'category_name'], ['seo', 'category_seo']],
              },
              {
                model: users,
                attributes: [['name', 'name']],
              }],
            limit,
            offset: offSetValue,
            order: [['createdAt', 'DESC']],
          },
        );
        res.status(200).send({ result, catName: cat.name });
      } else {
        const result = await posts.findAndCountAll(
          {
            where: { category_id: idArray },
            include: [
              {
                model: categories,
                attributes: [['name', 'category_name'], ['seo', 'category_seo']],
              },
              {
                model: users,
                attributes: [['name', 'name']],
              }],
            order: [['createdAt', 'DESC']],
          },
        );
        res.status(200).send({ result, catName: cat.name });
      }
    } else {
      res.status(404).send({ message: 'Wrong Category title' });
    }
  } catch (error) {
    console.log(error);

    res.status(500).send('Internal Server Error');
  }
};

const { Op } = require('sequelize');
const { categories, posts, users } = require('../database/models');

exports.search = async (req, res) => {
  try {
    const { searchData } = req.body;
    const categoryResults = await categories.findAll({
      where: {
        name: {
          [Op.iLike]: `%${searchData}%`,
        },
      },
    });
    const postsResult = await posts.findAll({
      where: {
        title: {
          [Op.iLike]: `%${searchData}%`,
        },
      },
    });
    const usersResult = await users.findAll({
      where: {
        name: {
          [Op.iLike]: `%${searchData}%`,
        },
      },
    });
    if (categoryResults.length !== 0 || postsResult.length !== 0 || usersResult.length !== 0) {
      res.status(200).send({ categoryResults, postsResult, usersResult });
    } else {
      res.status(400).send({ message: 'There in no results' });
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

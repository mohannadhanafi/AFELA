const Sequelize = require('sequelize');
const connection = require('../config');

const categories = connection.define('newsletter', {
  email: Sequelize.TEXT,
  hash: Sequelize.TEXT,
  activated: Sequelize.BOOLEAN,
  createdAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE,
  },
});

module.exports = categories;

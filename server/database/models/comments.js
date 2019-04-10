const Sequelize = require('sequelize');
const connection = require('../config');


const comments = connection.define('comments', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  approve: {
    type: Sequelize.TEXT,
    defaultValue: '0',
  },
  createdAt: {
    allowNull: false,
    defaultValue: Date.now(),
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    defaultValue: Date.now(),
    type: Sequelize.DATE,
  },
  username: Sequelize.TEXT,
});

module.exports = comments;

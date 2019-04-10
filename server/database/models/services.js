const Sequelize = require('sequelize');
const connection = require('../config');

const services = connection.define('services', {
  icon: {
    type: Sequelize.TEXT,
    defaultValue: 'fas fa-book-open fa-2x',
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  desc: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE,
  },
});

module.exports = services;

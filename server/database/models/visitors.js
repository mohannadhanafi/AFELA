const Sequelize = require('sequelize');
const connection = require('../config');

const visitors = connection.define('visitors', {
  visitors: Sequelize.TEXT,
  count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = visitors;

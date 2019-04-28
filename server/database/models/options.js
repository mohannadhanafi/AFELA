const Sequelize = require('sequelize');
const connection = require('../config');

const posts = connection.define('options', {
  facebook: {
    type: Sequelize.TEXT,
  },
  contact: {
    type: Sequelize.TEXT,
  },
  twitter: {
    type: Sequelize.TEXT,
  },
  whats: Sequelize.TEXT,
  google: Sequelize.TEXT,
  googleplus: Sequelize.TEXT,
  youtube: Sequelize.TEXT,
  linkedin: Sequelize.TEXT,
  vimeo: Sequelize.TEXT,
  logo: {
    type: Sequelize.TEXT,
  },
  second_logo: {
    type: Sequelize.TEXT,
  },
  copyrights: {
    type: Sequelize.TEXT,
  },
  facebook_number: {
    allowNull: false,
    defaultValue: 0,
    type: Sequelize.TEXT,
  },
  footer_description: Sequelize.TEXT,
  email: Sequelize.TEXT,
  about_title: Sequelize.TEXT,
  about_desc: Sequelize.TEXT,
  about_story: Sequelize.TEXT,
  about_story_desc: Sequelize.TEXT,
  twitter_number: {
    allowNull: false,
    defaultValue: 0,
    type: Sequelize.TEXT,
  },
  instagram_number: {
    allowNull: false,
    defaultValue: 0,
    type: Sequelize.TEXT,
  },
  sound_number: {
    allowNull: false,
    defaultValue: 0,
    type: Sequelize.TEXT,
  },
  snap_number: {
    allowNull: false,
    defaultValue: 0,
    type: Sequelize.TEXT,
  },
  youtub_number: {
    allowNull: false,
    defaultValue: 0,
    type: Sequelize.TEXT,
  },
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
  mobile: Sequelize.TEXT,
  address: Sequelize.TEXT,
  category_layout: Sequelize.TEXT,
});

module.exports = posts;

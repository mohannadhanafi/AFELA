const homePageLayouts = require('./homePageLayouts');
const connection = require('../config');
const users = require('./users');
const categories = require('./categories');
const posts = require('./posts');
const options = require('./options');
const newsletter = require('./newsletter');
const comments = require('./comments');
const notifications = require('./notifications');
const ads = require('./ads');
const services = require('./services');
const visitors = require('./visitors');
const mail = require('./mails');

posts.belongsTo(categories, {
  onDelete: 'CASCADE',
  foreignKey: 'category_id',
  targetKey: 'id',
});
homePageLayouts.belongsTo(categories, {
  onDelete: 'CASCADE',
  foreignKey: 'category_id',
  targetKey: 'id',
});


comments.belongsTo(posts, {
  onDelete: 'CASCADE',
  foreignKey: 'post_id',
  targetKey: 'id',
});
notifications.belongsTo(users, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
  targetKey: 'id',
});

posts.belongsTo(users, {
  onDelete: 'CASCADE',
  foreignKey: 'auther_id',
  targetKey: 'id',
});

module.exports = {
  connection,
  users,
  categories,
  posts,
  options,
  newsletter,
  comments,
  notifications,
  ads,
  services,
  homePageLayouts,
  visitors,
  mail,
};

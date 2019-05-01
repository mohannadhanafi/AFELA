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
const team = require('./team');
const titles = require('./titles');
const clients = require('./clients');
const galleries = require('./galleries');
const homeLayout = require('./homeLayout');
const statistics = require('./statistics');
const threeColumns = require('./threeColumns');

posts.belongsTo(categories, {
  onDelete: 'CASCADE',
  foreignKey: 'category_id',
  targetKey: 'id',
});
categories.hasMany(posts, { foreignKey: 'category_id' });
threeColumns.belongsTo(homeLayout, { foreignKey: 'homepage_id' });
threeColumns.belongsTo(categories, { foreignKey: 'category_id' });
homeLayout.belongsTo(categories, { foreignKey: 'category_id' });
homeLayout.hasMany(threeColumns, { foreignKey: 'homepage_id' });
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
  galleries,
  ads,
  team,
  services,
  titles,
  homePageLayouts,
  visitors,
  mail,
  clients,
  homeLayout,
  statistics,
  threeColumns,
};

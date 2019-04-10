const {
  users,
  posts,
  comments,
  categories,
  notifications,
  visitors,
} = require('../database/models');

exports.get = async (req, res) => {
  const { id } = req;
  try {
    const result = [];
    const usersCount = await users.findAndCountAll();
    const userDetails = usersCount.count;
    result.push({ title: 'users', prize: userDetails, bgColor: 'primary' });
    const postsCount = await posts.findAndCountAll();
    const postDetails = postsCount.count;
    result.push({ title: 'posts', prize: postDetails, bgColor: 'teal' });
    const commentsCount = await comments.findAndCountAll();
    const commentDetails = commentsCount.count;
    result.push({ title: 'comments', prize: commentDetails, bgColor: 'pink' });
    const categoriesCount = await categories.findAndCountAll();
    const categoriesDetails = categoriesCount.count;
    result.push({
      title: 'categories',
      prize: categoriesDetails,
      bgColor: 'orange',
    });
    const pendengPosts = await posts.findAndCountAll({
      where: { approve: false },
    });
    const pendengComments = await comments.findAndCountAll({
      where: { approve: '0' },
    });
    const unreadNotifications = await notifications.findAndCountAll({
      where: { seen: false, user_id: id },
    });
    const visitorsCount = await visitors.findAll({
      order: [['count', 'DESC']],
      raw: true,
    });
    res.status(200).send({
      result,
      pendengPosts: pendengPosts.count,
      pendengComments: pendengComments.count,
      unreadNotifications: unreadNotifications.count,
      visitorsCount,
    });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

exports.frontCount = async (request, response) => {
  try {
    const result = [];
    const usersCount = await users.findAndCountAll();
    const userDetails = usersCount.count;
    result.push({ title: 'users', prize: userDetails, bgColor: 'primary' });
    const postsCount = await posts.findAndCountAll();
    const postDetails = postsCount.count;
    result.push({ title: 'posts', prize: postDetails, bgColor: 'teal' });
    const commentsCount = await comments.findAndCountAll();
    const commentDetails = commentsCount.count;
    result.push({ title: 'comments', prize: commentDetails, bgColor: 'pink' });
    const categoriesCount = await categories.findAndCountAll();
    const categoriesDetails = categoriesCount.count;
    result.push({
      title: 'categories',
      prize: categoriesDetails,
      bgColor: 'orange',
    });
    const visitorsCount = await visitors.sum('count');
    result.push({ title: 'visitors', prize: visitorsCount, bgColor: 'orange' });
    response.status(200).send({
      result,
    });
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};

const { users } = require('../database/models');

exports.get = async (req, res) => {
  try {
    const { id } = req;
    const result = await users.findAll({ attributes: ['first', 'last', 'pic', 'id'], where: { id } });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send('Server Error !');
  }
};

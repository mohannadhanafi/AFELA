const { users } = require('../../database/models');

const checkAdmin = async (request, response) => {
  const { id } = request;
  const userResult = users.find({ where: { id } });
};

module.export = checkAdmin;

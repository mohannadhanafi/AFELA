const validatior = require('validator');
const { services } = require('../database/models');

exports.get = async (req, res) => {
  try {
    const result = await services.findAll({ order: [['id', 'DESC']] });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.post = async (req, res) => {
  try {
    const data = req.body;
    await services.create(data);
    res.status(200).send({ message: 'service has been added' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.delete = (req, res) => {
  try {
    const {
      id,
    } = req.body;
    services.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: 'Success, service is deleted',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

exports.getService = async (req, res) => {
  try {
    const {
      id,
    } = req.params;
    const result = await services.findAll({ where: { id } });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { data, params: { id } } = req.body;
    const { title, desc } = data;
    if (!title.trim() || !desc.trim() || !validatior.isLength(title, { min: 1, max: 20 })) {
      res.status(400).send({
        message: 'Invalid inputs, please note the type of each input',
      });
    } else {
      services.update(data, { where: { id } });
      res.status(200).send({ message: 'Updated is done' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

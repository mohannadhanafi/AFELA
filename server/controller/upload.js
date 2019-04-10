const fs = require('fs');
const path = require('path');

exports.post = (request, response) => {
  const { file } = request.files;
  const { name, data } = file;
  const splitName = name.split('.');
  const nameOfFile = Date.now()
    .toString(16)
    .toUpperCase();
  const ext = splitName[1];
  const fullName = `${nameOfFile}.${ext}`;
  fs.writeFile(`uploads/${fullName}`, data, (err) => {
    response.send({ fullName });
  });
};

exports.remove = (request, response) => {
  const { pic } = request.body;
  fs.unlink(`uploads/${pic}`, (err) => {
    if (err) response.status(500).send({ message: 'Internal Server Error' });
    response.send({ message: 'File Deleted' });
  });
};

exports.get = (request, response) => {
  const { name } = request.params;
  response.sendFile(path.join(__dirname, '..', '..', 'uploads', name));
};

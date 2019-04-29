const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

exports.post = async (request, response) => {
  const { file } = request.files;
  const { name, data } = file;
  const splitName = name.split('.');
  const nameOfFile = Date.now()
    .toString(16)
    .toUpperCase();
  const ext = splitName[1];
  const fullName = `${nameOfFile}.${ext}`;
  fs.writeFile(`uploads/${fullName}`, data, async (err) => {
    sharp(path.join(__dirname, '..', '..', 'uploads', fullName))
      .resize(240, 170)
      .toFile(
        path.join(
          __dirname,
          '..',
          '..',
          'uploads',
          `${nameOfFile}_small.${ext}`,
        ),
      )
      .then(() => {
        sharp(path.join(__dirname, '..', '..', 'uploads', fullName))
          .resize(370, 300)
          .toFile(
            path.join(
              __dirname,
              '..',
              '..',
              'uploads',
              `${nameOfFile}_medium.${ext}`,
            ),
          )
          .then(() => {
            sharp(path.join(__dirname, '..', '..', 'uploads', fullName))
              .resize(640, 540)
              .toFile(
                path.join(
                  __dirname,
                  '..',
                  '..',
                  'uploads',
                  `${nameOfFile}_large.${ext}`,
                ),
              )
              .then(() => {
                response.send({ fullName });
              });
          });
      });
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

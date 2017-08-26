const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');
const zipper = require('./zipper');
<<<<<<< HEAD
const templateController = require('./templateController')
const createFolder = require('./folderBuilder.js');
const remover = require('./remover.js');
const moduleController = require('./moduleController.js')
// const john = require('./john.js')
=======
const templateController = require('./templateController');
const moduleController = require('./moduleController.js');
const settingsController = require('./settingsController');
>>>>>>> 114fe5159226967b9cfb7e1bfa50c84574528a73

app.use(bodyParse());
app.use(express.static('build'));

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
});

app.post('/',
  templateController,
  moduleController.assets,
  moduleController.components,
  moduleController.style,
<<<<<<< HEAD
   //johns middleware,
=======
  settingsController.packageParser,
  settingsController.webpackParser,
>>>>>>> 114fe5159226967b9cfb7e1bfa50c84574528a73
  zipper,
  (req, res) => res.send('this is the response'),
);

app.use('/assets', express.static('build'));

app.listen(3000, () => {
  console.log('now listening on 3000!');
});


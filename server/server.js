const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');
const zipper = require('./zipper');
const createFolder = require('./folderBuilder.js');
const remover = require('./remover.js');

app.use(bodyParse());
app.use(express.static('build'));

app.get("/", (req,res) => {
  //When using path.join, please DON'T add current directory "./[path]"
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

// app.get('/download', createFolder, zipper, (req,res) => {
// // app.get('/', createFolder, zipper, (req,res) => {
//     res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
// });


app.get('/download', (req, res) => {
  console.log('inside get request');
  res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
})

app.post('/', createFolder, zipper, (req, res) => {
  console.log(req.body);
  res.send('this is the response');
  // res.redirect('http://localhost:3000/download');
})

app.listen(3000, () => {
    console.log('now listening on 3000!');
}); 

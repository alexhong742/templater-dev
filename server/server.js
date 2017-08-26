let express = require('express');
let app = express();
const path = require('path');
const bodyParse = require('body-parser');
let zipper = require('./zipper');
let createFolder = require('./folderBuilder.js');
let remover = require('./remover.js');

app.use(bodyParse());
app.use(express.static('build'));

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

app.post('/download', createFolder, zipper, (req,res) => {
// app.get('/download', createFolder, zipper, (req,res) => {
    console.log('postReceived')
    res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
});


app.listen(3000, () => {
    console.log('now listening on 3000!');
}); 

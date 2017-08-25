let express = require(express)
let app = express()
const path = require('path');
const bodyParse = require('body-parser')

app.use(bodyParse())
app.use(express.static('build'))


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, './../index.html'))
})

app.get('/build/bundle.js', (req, res) => {
    // res.sendFile(path.join(__dirname, './../build/bundle.js'))
})


app.listen(3000, () => {
    console.log('now listening on 3000!');
});

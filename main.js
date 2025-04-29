// index.js
const express = require('express');
const app = express();
const port = 3000;

// const player = videojs('myPlayer');

app.use(express.static('videos'))
app.use(express.static('style'))
app.use(express.static('scripts'))
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
    // console.log(videojs);
    // var player = videojs('my-playerrr');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('express');
const app = express();
const post = require('./api/models/posts');
const postsData = new post();

PORT = 4000;




app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get());
});



















app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});




app.listen(PORT, () => console.log('listening on http://localhost:4000'))



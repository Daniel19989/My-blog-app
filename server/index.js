const express = require('express');
const app = express();
const post = require('./api/models/posts');
const postsData = new post();

PORT = 4000;


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get());
});


app.get('/api/posts/:post_id', (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if (foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send('Not Found');
    }
})

app.post("/api/posts/upload", (req, res) => {
    console.log(req.body)
    const newPost = {
        id: `${Date.now()}`,
        title: req.body.title,
        content: req.body.content,
        post_image: req.body.post_image,
        added_date: `${Date.now()}`
    }
    console.log(req.body)
    postsData.add(newPost);
    res.status(201).send(newPost);
})

app.listen(PORT, () => console.log('listening on http://localhost:4000'));



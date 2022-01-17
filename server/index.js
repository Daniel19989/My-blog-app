const express = require('express');
const app = express();
const post = require('./api/models/posts');
const postsData = new post();

PORT = 4000;




app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get());
});

app.use('/uploads', express.static('uploads'));


app.get('/api/posts/:post_id', (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if (foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send('Not Found');
    }
})


app.listen(PORT, () => console.log('listening on http://localhost:4000'));



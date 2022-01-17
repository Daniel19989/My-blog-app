const API_URL = "http://localhost:4000/api/posts";
const API_BASE_URL = "http://localhost:4000";
const axios = require('axios');
const { useState } = require('react');


Window.onload = () => {
    GetPosts();
}

const GetPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        BuildPosts(data);
    })

}

const [state, setstate] = useState(initialState)




// async function GetData() {

//     try {
//         const response = await axios.get('http://localhost:4000/api/posts');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }

const API_URL = "http://localhost:4000/api/posts";
const API_BASE_URL = "http://localhost:4000";

const BuildPosts = (BlogPosts) => {
    console.log(BlogPosts);
    let BlogPostContent = '';
    for (BlogPosts of BlogPosts) {
        const PostDate = new Date(parseInt(BlogPosts.added_date)).toDateString();
        const PostImage = `${API_BASE_URL}${Blog.post_image}`
        BlogPostContent +=
            ` <div className='post'>
        <img className='post-image' src=${post_image} alt='broken' />
        <div className='post-content'>${post_content}
            <div className='post-date'>${post_date}</div>
            <div className='post-title'><h4>${post_title}</h4></div>
            <div className='post-text'>${post_text}</div>
        </div>
    </div>`

    }
}


document.querySelector('.blog-posts').innerHtml = BlogPostContent;

style = 'background-image: url(${PostImage})'
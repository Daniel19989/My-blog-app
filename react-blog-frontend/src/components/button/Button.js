import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom';

const AddPostButton = () => {

    return (
        <div >
            <Link to={"/NewPost"}>
                <div className='nav-button new-post-button'>+</div>
            </Link>
        </div>
    )
}

export default AddPostButton



import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom';

const AddPostButton = () => {
    return (
        <div className='add-post'>
            <Link to='/Post'>
                <div className='nav-button new-post-button'>+</div>
            </Link>
        </div>
    )
}

export default AddPostButton



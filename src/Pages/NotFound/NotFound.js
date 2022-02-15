import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <img width="50%" src="https://i.ibb.co/41XXTSv/nonetwork.gif" alt="" /><br />
            <Link to="/">
                <button className='btn-notFound'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;
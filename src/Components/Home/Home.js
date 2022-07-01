import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h2> Home Component</h2>
            <ul>
                <li>
                    <Link to='/adduser' >Add User</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
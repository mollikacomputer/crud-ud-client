import React from 'react';
import  {Link} from 'react-router-dom';
const AddUser = () => {
    return (
        <div>
            <h2> Add New User</h2>
            <ul>
                <li>
                    <Link to='/' >Back to home</Link>
                </li>
            </ul>
        </div>
    );
};

export default AddUser;
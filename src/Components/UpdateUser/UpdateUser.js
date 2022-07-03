import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateUser = () => {
     {/* get id from backend */}
    const {id} = useParams();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        // const url = `http://localhost:5000/user/62bc43b4879f559e997105ee`;
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    return (
        <div>
            <h2> Update page</h2>
            <ul>
                <li>
                    <Link to="/" >Back to Home</Link>
                </li>
                <li>
                    <Link to="/adduser" >Back to Add User</Link>
                </li>
            </ul>
            {/* print id from backend */}
            <h2> Update User {user.name} </h2>

        </div>
    );
};

export default UpdateUser;
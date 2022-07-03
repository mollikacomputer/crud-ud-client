import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateUser = () => {
     {/* get id from backend */}
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        // const url = `http://localhost:5000/user/62bc43b4879f559e997105ee`;
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[]);
    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = {name, email};
        console.log(updatedUser);
        event.target.reset();
        // sent data to server side
        const url = `http://localhost:5000/user/${id}`;
        fetch( url, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser),
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            event.target.reset();
        });

    }
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
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <input type="submit" value="Update User" />
            </form>

        </div>
    );
};

export default UpdateUser;
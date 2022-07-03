import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
const AddUser = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        console.log(user);
        event.target.reset();
        // sent data to server side
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            event.target.reset();
        });

    }

    // get data from server side and show display 
        // show data from server
        const [users, setUsers] = useState([]);
        useEffect(()=>{
            fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setUsers(data) )
        }, []);

        const handleDelete = id =>{
            const proceed = window.confirm('are you sure you want to delete?')
            if(proceed){
                console.log('deleting ', id);
                const url =`http://localhost:5000/user/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // refresh remaining data or deleted data
                    if(data.deletedCount >0){
                        // deletedCount get from console.log 
                        console.log(data);
                        const remaining = users.filter( user => user._id !== id);
                        setUsers(remaining);
                    }
                })
            }

        }
    return (
        <div>
            <h2>Add User</h2>
            <ul>
                <li>
                    <Link to="/" >Back to Home</Link>
                </li>
            </ul>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <input type="submit" value="Add User" />
            </form>
            <h2> Total User {users.length} </h2>
            <ul>
                {
                    users.map(u => <li key={u._id} > 
                    {u.name} : {u.email} 
                    <Link to={`/updateuser/${u._id}`} > <button> Update</button> </Link>
                    <button onClick={ ()=>handleDelete(u._id) } > X </button>
                    </li> )
                }
            </ul>
        </div>
    );
};

export default AddUser;
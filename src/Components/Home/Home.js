import React, { useEffect, useState, useSyncExternalStore } from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    // show data from server
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/user`)
        .then(res => res.json())
        .then(data => setUsers(data) )
    }, []);
    return (
        <div>
            <h2> Home page</h2>
            <ul>
                <li>
                    <Link to="/adduser" > Add User </Link>
                </li>
                <li>
                    <Link to="/updateuser" > Update User </Link>
                </li>
            </ul>
            <h2> Total Users ${users.length} </h2>
            
        </div>
    );
};

export default Home;
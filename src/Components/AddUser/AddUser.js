import React from 'react';
import  {Link} from 'react-router-dom';
const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        console.log(user);
        event.target.reset();
        // post client side to serer side
        
    }
    return (
        <div>
            <h2> Add New User</h2>
            <ul>
                <li>
                    <Link to='/' >Back to home</Link>
                </li>
            </ul>
            <form onSubmit={handleAddUser} >
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;
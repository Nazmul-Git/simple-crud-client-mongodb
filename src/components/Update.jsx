/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user= useLoaderData();

    const handleUpdate=e=>{
        // get client site data
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email);
        const updatedUser={name,email};

        // client site to server site
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                alert('User updated successfully');
            }
        })
    }
    return (
        <div>
            
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={user.email} id="" />
                <br />
                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default Update;
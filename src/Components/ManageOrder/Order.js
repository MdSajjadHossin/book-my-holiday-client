import React, { useState } from 'react';
import './Order.css';

const Order = ({orders}) => {
    const [deleteOrder, setdeleteOrder] = useState([]);
    //DELETE AN USER
    const handleDeleteUser = id =>{
       const proceed = window.confirm('Are You Sure You Wnat To DELETE???');
       if(proceed){
        const url = `https://floating-basin-70468.herokuapp.com/orders`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingUsers = deleteOrder.filter(item => deleteOrder._id !==id);
                setdeleteOrder(remainingUsers);
            }
            
        });
       }
    }
    const {name, email, productName, address, city, phone} = orders;
    return (
        <div className="order-container">
            <h4>Order Name: {productName} </h4>
           <h6>User Name: {name}</h6> 
           <p>Email: {email} </p>
           <p>Address: {address} {city}</p>
           <h4>Phone: {phone}</h4>
           <button onClick={() => handleDeleteUser(deleteOrder._id)} className="btn-danger m-2">Delete</button>
        </div>
    );
};

export default Order;
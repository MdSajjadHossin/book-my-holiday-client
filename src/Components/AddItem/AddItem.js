import React from 'react';
import { useForm } from 'react-hook-form';
// import useAuth from '../hooks/useAuth';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit, reset} = useForm();
    // const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://floating-basin-70468.herokuapp.com/services', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Order added Successdull');
                reset();
            }
        })
    }
    return (
        <div className = "addItem-container">
            <h3>Add Items</h3>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Product Name" defaultValue="" {...register("name")} />
            <input placeholder="Image URL" defaultValue="" {...register("serviceImg")} />
            <input placeholder="Cost" defaultValue="" {...register("cost")} />
            <textarea className="mt-3" placeholder="Description" defaultValue="" {...register("description")} />

            <input type="submit" />
            </form>
        </div>
    );
};

export default AddItem;
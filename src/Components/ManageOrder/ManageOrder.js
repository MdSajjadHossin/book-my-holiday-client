import React, { useEffect, useState } from 'react';
import Order from './Order';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://floating-basin-70468.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    

    return (
        <div>
            <div className="manageOrder-container">
                {
                    orders.map(order => <Order
                        key={order._id
                        }
                        orders={order}
                    ></Order>
                    )
                }
            </div>
        </div>
    );
};

export default ManageOrder;
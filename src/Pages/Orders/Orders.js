// import { Button } from '@mui/material';
import React,{useState,useEffect} from 'react';

import { useParams } from 'react-router';
const Orders = () => {
  
   // const {user}=useAuth()
   const { id } = useParams();
    const [order,setOrder]=useState([])
  
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])


    
    return (
        <div>
           <h2>This is My order-{order.name}</h2>
       
        </div>
    );
};

export default Orders;
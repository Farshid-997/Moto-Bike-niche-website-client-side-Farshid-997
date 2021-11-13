
import React,{useState,useEffect} from 'react';
import Order from './Order'
import { useParams } from 'react-router';
const Orders = () => {
  
   // const {user}=useAuth()
   const { id } = useParams();
    const [orders,setOrder]=useState([])
  
    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])


    
    return (
        <div>
          {
              orders.map(order=><Order
                order={order}
                ></Order>)
              }       
        </div>
    );
};

export default Orders;
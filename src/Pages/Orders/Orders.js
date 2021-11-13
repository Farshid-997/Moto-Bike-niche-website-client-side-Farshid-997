
import React,{useState,useEffect} from 'react';
import Order from './Order'
import { useParams } from 'react-router';
const Orders = () => {
  
   // const {user}=useAuth()
   const { id } = useParams();
    const [orders,setOrder]=useState([])
  
    useEffect(()=>{
        fetch(`https://whispering-reaches-15344.herokuapp.com/orders/${id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[id])


    
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
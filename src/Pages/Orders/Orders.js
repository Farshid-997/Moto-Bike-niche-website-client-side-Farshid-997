
import { Container, Grid, Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';

import useAuth from '../../Hooks/useAuth'
const Orders = () => {
    const {user}=useAuth()
    
    const [orders,setOrders]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
           <h2>This is My order bu{orders.length}</h2>

           <Container>

           <Grid container spacing={2}>
  <Grid item xs={8}>
  <Typography variant="h5" sx={{color:'black' ,fontWeight:'bold', mb:3}}>

</Typography>
  </Grid>
  <Grid item xs={4}>
   
  </Grid>
  
</Grid>
           </Container>
        </div>
    );
};

export default Orders;
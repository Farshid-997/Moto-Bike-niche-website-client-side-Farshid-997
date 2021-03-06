import React, { useEffect, useState } from 'react';
import {  Grid, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import axios from 'axios';
import Navigation from '../Navigation/Navigation'
import './Purchase.css'
import useAuth from '../../Hooks/useAuth'

const Purchase = () => {
    const { id } = useParams();
    const{user}=useAuth();
    const[purchase,setPurchase]=useState({})
    const { register, handleSubmit,reset } = useForm();
 
useEffect(()=>{

fetch(`https://whispering-reaches-15344.herokuapp.com/purchase/${id}`)
.then(res=>res.json())
.then(data=>setPurchase(data))

},[id])
    const onSubmit = data => {
        console.log(data)
        axios.post('https://whispering-reaches-15344.herokuapp.com/orders',data)
        .then(res=>{
         console.log(res) 
         if(res.data.insertedId)  {
      
          reset()
         }
        })
    }



    return (
    <div className="add-product">
<Navigation></Navigation>
<Typography variant="h2" sx={{color:'black' ,fontWeight:'bold', mb:3}}>

Now Add More info to Purchase Item  

</Typography>

<Typography variant="h5" sx={{color:'black' ,fontWeight:'bold', mb:3}}>


UserName:{user.email && <span style={{ color: 'blue', fontWeight: 'bold' }}>Hello!!{user.displayName}</span>}

</Typography>

<Typography variant="h5" sx={{color:'black' ,fontWeight:'bold', mb:3}}>
Email:{user.email && <span style={{ color: 'blue', fontWeight: 'bold' }}>  {user.email}</span>}
</Typography>


<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={6}>
      <Typography>
      <h1>Name of The Product:{purchase.Name}</h1> 

<h1>Image:</h1><img style={{width:'200px'}} src={purchase.img} alt="" /> 
<h2>Price:</h2><p style={{color:'orange',fontWeight:'bold'}}>{purchase.price}</p>
<h2><p>Description:{purchase.description} </p></h2>



      </Typography>
  
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
   
  <form onSubmit={handleSubmit(onSubmit)}>
<input {...register("name")} placeholder="BikeName"/>
<textarea {...register("description")} placeholder="Description"/>
<input type="number" {...register("price")} placeholder="BikePrice" />
<input {...register("address")} placeholder="Your Address"/>
<input {...register("mobile")} placeholder="Mobile Number"/>
<input {...register("email")} placeholder="Your Email"/>
<input {...register("license")} placeholder="Your Bike License"/>
<input {...register("payment")} placeholder="Your paymentMethod"/>


<input type="submit" />

</form>

  </Grid>
 
 
</Grid>




    </div>
    );
};

export default Purchase;
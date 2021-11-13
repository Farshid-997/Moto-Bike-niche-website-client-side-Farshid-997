import {  Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import Navigation from '../Navigation/Navigation';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data)
      axios.post('https://whispering-reaches-15344.herokuapp.com/products',data)
      .then(res=>{
       console.log(res) 
       if(res.data.insertedId)  {
     alert('Product Added Successfully')
        reset()
       }
      })
  }
  return(
        <div className="add-service">
      
       
      <Typography variant="h2" sx={{color:'#dd49eb' ,fontWeight:'bold', mb:3}}>

          ADD a Product!!
      </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name")} placeholder="BikeName"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("price")} placeholder="BikePrice" />
      <input {...register("img")} placeholder="image url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;
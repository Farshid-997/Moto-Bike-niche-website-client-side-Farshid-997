import {  Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../Navigation/Navigation';
const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/reviews',data)
        .then(res=>{
         console.log(res) 
         if(res.data.insertedId)  {
       alert('Product Added Successfully')
          reset()
         }
        })
    }
    return (
   
             <div className="add-service">
        <Navigation/>
       
      <Typography variant="h2" sx={{color:'#dd49eb' ,fontWeight:'bold', mb:3}}>

          ADD a Review!!
      </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Productname")} placeholder="BikeName"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("rating")} placeholder="Rating" />
    
      <input type="submit" />
    </form>
        </div> 
        
    );
};

export default AddReview;
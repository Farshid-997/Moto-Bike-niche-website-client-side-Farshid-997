import React from 'react';
import {  Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import img1 from '../../Images/R.jpg'
const Review = (props) => {
    const {Productname, rating, description } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
        component="img"
        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
        image={img1}
        alt="green iguana"
        />
        <CardContent>
        <Typography variant="h5" component="div">
        {Productname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
       {
           rating==='4' &&
           <Typography variant="body2" color="text.secondary">
           
           Rating:{rating} <br/>
           <Rating name="half-rating-read" defaultValue={2.5} precision={4} readOnly />
           </Typography>
   
    
       }

{
           rating==='5' &&
           <Typography variant="body2" color="text.secondary">
           
           Rating:{rating} <br/>
           <Rating name="half-rating-read" defaultValue={2.5} precision={5} readOnly />
           </Typography>
   
    
       }
       
       
        </CardContent>
        </Card>
        </Grid>
    );
};

export default Review;
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../ShowReview/Review';


const Reviews = () => {
    const[reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://whispering-reaches-15344.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
   
        <Typography sx={{fontWeight:600,m:2,color: 'success.main'}} variant="h6" component="div">
 Customer Reviews
   </Typography>
   
   <Typography sx={{fontWeight:600,m:5}} variant="h4" component="div">
 We have Reviews to Show
   </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
   
             {
               reviews.map(review=><Review
               review={review}
               ></Review>)
                 
             }
              
           
         </Grid>
        </Container>
       </Box>
    );
};

export default Reviews;
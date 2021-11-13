import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Items from './Items';
import Navigation from '../Navigation/Navigation';

const MoreItems = () => {
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://whispering-reaches-15344.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
     <Container>

     <Typography sx={{fontWeight:600,m:2,color: 'success.main'}} variant="h6" component="div">
Our Products
</Typography>

<Typography sx={{fontWeight:600,m:5}} variant="h4" component="div">
We Have Best Bike Collections
</Typography>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        

          {
            items.map(item=><Items
            item={item}
            ></Items>)
              
          }
           
        
      </Grid>
     </Container>
    </Box>
    );
};

export default MoreItems;
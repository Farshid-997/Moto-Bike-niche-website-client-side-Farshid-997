import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bike from '../../../Images/wp3647905-black-bike-wallpapers.jpg'
import rider from '../../../Images/biking-motorcycle-forest.jpg'
import { Button, Container, Typography } from '@mui/material';


const backgroundbg={
    background:`url(${bike})`,
   
}
const verticalAlign={
    display:'flex',
  alignItems:'center',
    height:450,
  
   
}
const Banner = () => {
    return (
        <div style={backgroundbg}>
<Container  sx={{ flexGrow: 1 }}>
        <Grid    container spacing={2}>
          <Grid item xs={12} sm={4} md={5} style={{...verticalAlign,textAlign:'left'}}>
  
  
         <Box>
  
         <Typography varirant="h1" style={{color:'white'}}>
  Bike Sells 
  Starts Here
          </Typography>
  
          <Typography varirant="h1" style={{fontSize:14,fontWeight:300,color:'white'}}>
 We Have Some amazing bike Collections
          </Typography>
  
          <Button variant="contained" sx={{mt:2}} style={{backgroundColor:"#5CE7ED"}}>Get the Bike</Button>
         </Box>
  
          </Grid>
{/*   
          <Grid item xs={12} sm={8} md={7} style={verticalAlign}>
       <img style={{width:'350px'}} src={rider} alt="" /> 
          </Grid>
        */}
         
        </Grid>
      </Container>  
        </div>
        
    );
};

export default Banner;
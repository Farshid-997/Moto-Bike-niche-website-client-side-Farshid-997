import { Grid } from '@mui/material';
import React from 'react';
import Order from '../../Orders/Order';


const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
  <Grid item xs={8}>
 <Order></Order>
  </Grid>
  <Grid item xs={4}>
   
  </Grid>
  
  
</Grid>
    );
};

export default DashboardHome;
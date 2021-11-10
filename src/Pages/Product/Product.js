import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
const Product = (props) => {
    const {Name, price, description, img } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
        component="img"
        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
        image={img}
        alt="green iguana"
        />
        <CardContent>
        <Typography variant="h5" component="div">
        {Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {price}
        </Typography>
<Link to="/purchase">
<Button variant="text">Purchase</Button>
</Link>
 
        </CardContent>
        </Card>
        </Grid>
    );
};

export default Product;
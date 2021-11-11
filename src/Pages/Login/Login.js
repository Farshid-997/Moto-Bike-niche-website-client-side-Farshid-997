import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import login from '../../Images/20944201.jpg'
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Navigation/Navigation';
const Login = () => {
  
    const [loginData,setLoginData]=useState({})
    const {loginUser}=useAuth()

    const handleOnChange=(e)=>{
        const field=e.target.name;
        const  value=e.target.value;
        const newloginData={...loginData}
        newloginData[field]=value
        console.log(newloginData)
        setLoginData(newloginData)
    }
    const handleLoginSubmit=(e)=>{
       
      
        loginUser(loginData.email,loginData.password)
        e.preventDefault()
}



    return (
        <div>
<Navigation/>
<Container>
        <Grid container spacing={2}>


    <Grid item xs={8}>
      <Typography sx={{m:8}}variant="body1" gutterBottom component="div">
 Login
  </Typography>

 <form onSubmit={handleLoginSubmit}>
<TextField sx={{width:"75%",mb:3}} onChange={handleOnChange} name="email" id="standard-basic" label="Your Email" variant="standard" />
<TextField sx={{width:"75%"}} onChange={handleOnChange} name="password" id="standard-basic" label="Password" type="password" variant="standard" />



<Button sx={{width:"75%",mt:3}} type="submit" variant="contained">Login</Button>

<NavLink style={{textDecoration:'none'}}to="/register">

<Button sx={{width:"75%",mt:3}} type="submit" variant="text">New User?Please Register!!</Button>

</NavLink>
</form> 



    </Grid>


    <Grid item xs={4}>
     <img style={{width:'100%'}} src={login} alt=""></img>
    </Grid>
 
 
  </Grid>
   </Container>
        </div>
       
    );
};

export default Login;
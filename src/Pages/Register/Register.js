import React, { useState } from 'react';

import { Alert, Button, CircularProgress, Container,  Grid, TextField, Typography } from '@mui/material';
import login from '../../Images/20944201.jpg'
import useAuth from '../../Hooks/useAuth';
import { NavLink,useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
const Register = () => {
        const [loginData,setLoginData]=useState({})
        const history=useHistory();
        const {user,registerUser,googleSignIn,isLoading,authError}=useAuth()
        const handleOnChange=(e)=>{
            const field=e.target.name;
            const  value=e.target.value;
            const newloginData={...loginData}
            newloginData[field]=value
            console.log(newloginData)
            setLoginData(newloginData)
        }
        const handleLoginSubmit=(e)=>{
           
          
            registerUser(loginData.email,loginData.password,loginData.name,history)
            e.preventDefault()
    }
       return (
        <div> 
            <Navigation/>
            <Container>
        <Grid container spacing={2}>


    <Grid item xs={8}>
      <Typography sx={{m:8}}variant="body1" gutterBottom component="div">
Register
  </Typography>

 {!isLoading && <form onSubmit={handleLoginSubmit}>
 <TextField sx={{width:"75%",mb:3}} onChange={handleOnChange} name="name" id="standard-basic" label="Your Name" variant="standard" />
<TextField sx={{width:"75%",mb:3}} onChange={handleOnChange} name="email" id="standard-basic" label="Your Email" variant="standard" />
<TextField sx={{width:"75%"}} onChange={handleOnChange} name="password" id="standard-basic" label="Password" type="password" variant="standard" />



<Button sx={{width:"75%",mt:3}} type="submit" variant="contained">Register</Button>

<NavLink style={{textDecoration:'none'}}to="/login">
<Button sx={{width:"75%",mt:3}} type="submit" variant="text">Already Sign Up?Login!</Button>
</NavLink>
<Button sx={{width:"75%",mt:3}} onClick={googleSignIn} type="submit" variant="text">Please Sign In With Google</Button>
</form> }

{isLoading && <CircularProgress/>}
{user?.email&& <Alert severity="success">User Created Successfully!</Alert>}
{authError && <Alert severity="error">{authError}</Alert>}
    </Grid>


    <Grid item xs={4}>
     <img style={{width:'100%'}} src={login} alt=""></img>
    </Grid>
 
 
  </Grid>
   </Container></div>
           
    );
};

export default Register;
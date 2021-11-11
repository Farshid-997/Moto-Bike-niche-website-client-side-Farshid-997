import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const Navigation = () => {
 const {user,logOut}=useAuth()
    return (
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

      <NavLink to="/home">

      <HomeIcon  sx={{color:'white'}} />
      </NavLink>
        
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MotoBike
          </Typography>
        
           <NavLink style={{textDecoration:'none',color:'white'}} to="/moreitems">
           <Button variant="text" color="inherit">More items</Button>
           </NavLink>
      
         {
           user?.email?
           <Button onClick={logOut} color="inherit">LogOut</Button>
           :
           <NavLink style={{textDecoration:'none',color:'white'}} to="/login">
           <Button color="inherit">Login</Button>
           </NavLink>
         
         }
           
          
           
           
      
         
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;
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
import { makeStyles } from '@mui/styles';

import { useTheme } from '@mui/material';


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const Navigation = () => {
  const theme=useTheme()
  const useStyle=makeStyles({
    navItem:{
      backgroundColor:'black'
    },
    navIcon:{
      [theme.breakpoints.up('sm')]:{
      display:'none'
      },
      
    
  }
  })
 const {user,logOut}=useAuth()
 const {navItem,navIcon}=useStyle()
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
            className={navIcon}
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
           <Box className="navItemContainer">
                <NavLink style={{textDecoration:'none',color:'white'}} to="/dashboard">
           <Button color="inherit">Dashboard</Button>
           </NavLink>
         

            <Button onClick={logOut} color="inherit">LogOut</Button>

           </Box>
         
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
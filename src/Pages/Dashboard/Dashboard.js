import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DahboardHome/DashboardHome';
import Orders from '../Orders/Orders';
import Payment from './UserDashBoard/Payment/Payment';



import ShowUserReview from './UserDashBoard/ShowUserReview/ShowUserReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../Hooks/useAuth';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddService/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import { Button } from '@mui/material';

const drawerWidth = 240;

function Dashboard(props) {
  
  const { window } = props;
  const{admin,logOut,user}=useAuth()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {
        user?.email&& <Box>

<Link to={`${url}/orders`}>My Orders</Link><br/>
      <Link to={`${url}/payment`}>Payment</Link><br/>
      <Link to={`${url}/review`}>Review</Link><br/>
        </Box>
      }
     
      
      {
        admin&& <Box>
  <Link to={`${url}/manageallorders`}>Manage All Orders</Link><br/>

  <Link to={`${url}/addproduct`}>Add A Product</Link><br/>
  <Link to={`${url}/makeAdmin`}>Make Admin</Link><br/>
  <Link to={`${url}/manageProduct`}>Maanage Product</Link><br/>
  <Button variant="text" onClick={logOut} color="inherit">LogOut</Button>

        </Box>
      }
    
    
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
         Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>

        <Route path={`${path}/orders`}>
         <Orders></Orders>
        </Route>

        <Route path={`${path}/payment`}>
       <Payment></Payment>
        </Route>

        <Route path={`${path}/review`}>
  <ShowUserReview></ShowUserReview>
        </Route>

        <Route path={`${path}/makeAdmin`}>
 <MakeAdmin></MakeAdmin>
        </Route>

        <Route path={`${path}/manageallorders`}>
 <ManageAllOrders></ManageAllOrders>
        </Route>

        <Route path={`${path}/addproduct`}>
 <AddProduct></AddProduct>
        </Route>

        <Route path={`${path}/manageProduct`}>
<ManageProduct></ManageProduct>
        </Route>

      </Switch>
        <Typography paragraph>
      
        </Typography>
        <Typography paragraph>
        
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
 
  window: PropTypes.func,
};

export default Dashboard;

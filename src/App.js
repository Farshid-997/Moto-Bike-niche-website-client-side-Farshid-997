import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddService/AddProduct';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register'
import MoreItems from './Pages/MoreItems/MoreItems';
import Login from './Pages/Login/Login'
import AddReview from './Pages/Review/AddReview';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Orders from './Pages/Orders/Orders';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <AuthProvider>

     <Router>
      <Switch>
         
      <Route exact path="/">
      <Home></Home>
          </Route>

          <Route  path="/home">
      <Home></Home>
          </Route>
          
          <Route path="/addProduct">
          <AddProduct></AddProduct>
          </Route>

          <PrivateRoute path="/addReviews">
         <AddReview></AddReview>
          </PrivateRoute>

          <PrivateRoute path="/orders/:id">
        <Orders></Orders>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
       <Dashboard></Dashboard>
          </PrivateRoute>


          <PrivateRoute path="/purchase/:id">

<Purchase></Purchase>
          </PrivateRoute>

          <Route path="/moreitems">
    <MoreItems></MoreItems>
          </Route>



           <Route path="/login">
      <Login></Login>
          </Route>

          <Route path="/register">
     <Register></Register>
          </Route>


        </Switch>
    </Router>

     </AuthProvider>
     
     
     
    </div>
  );
}

export default App;

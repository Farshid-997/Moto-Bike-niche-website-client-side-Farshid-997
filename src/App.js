import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddService/AddProduct';
import Purchase from './Pages/Purchase/Purchase';

import MoreItems from './Pages/MoreItems/MoreItems';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AddReview from './Pages/Review/AddReview';
function App() {
  return (
    <div className="App">
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

          <Route path="/addReviews">
         <AddReview></AddReview>
          </Route>

          <Route path="/purchase">
        <Purchase></Purchase>
          </Route>

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
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import Booking from './Components/Booking/Booking';
import AuthProvider from './Components/context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Route>
          <Header></Header>
      </Route>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/Booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute path="/addItem">
            <AddItem></AddItem>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

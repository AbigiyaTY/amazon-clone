import './App.css';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider/StateProvider';
import React, { useEffect } from "react";
// Back END
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';
const promise = loadStripe(
'pk_test_51KgQPWAoxC8JSIwQ2koSTDNYMOV1Y9qZsaa6DiGJVdDjv9BumBLHDINmACyMLdGX5H7I9mu5NuxGDyGEGCISykOe00hGcGzNAj'
);
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type: 'SET_USER',
        user: authUser,
      });
    }else{
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }
    });  
  },[]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
              path='/Orders'
              element = {
                <>
                <Header />
                <Orders />
                </>
              }/>
          <Route 
            path="/Login" 
            element = 
              {<Login/>}
              />
          <Route 
            path="/Payment" 
            element = {
            <Elements stripe={promise}> 
            <Payment/>  
            </Elements>
          }/>
          <Route 
            path="/Checkout" 
            element = {
            <>
            <Header/>
            <Checkout/>
            </>
          }/>
          <Route 
            path="/" 
            element = {
            <>
            <Header/>
            <Home/>
            <Footer/>
            </>
          }/>

    </Routes>
    </div>
    </Router>
  );
}

export default App;

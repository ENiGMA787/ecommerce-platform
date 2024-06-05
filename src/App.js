import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // Runs once when the app component loads
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in or was already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  const showHeader = location.pathname !== '/login';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} /> {/* Added Login Route */}
      </Routes>
    </div>
  );
}

export default App;

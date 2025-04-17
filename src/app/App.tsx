import React from "react";
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";


function App() {
 const location = useLocation(); // qaytarishi object
 console.log(location);
 

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/products" >ProdutsPage</Link>
          </li>
          <li>
            <Link to="/orders" > OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page" > UserPage</Link>
          </li>
          <li>
            <Link to="/" > HomePage</Link>
          </li>
        </ul>
      </nav>
   {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;

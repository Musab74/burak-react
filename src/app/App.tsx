
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage  from "./screens/productsPage";
import OrdersPage  from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar  from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import '../css/app.css';
import '../css/navbar.css';
import "../css/footer.css";
import HelpPage from "./screens/helpPage";
import useBasket from "./hooks/useBasket";


function App() {
  const location = useLocation(); // qaytarishi object
 
  const {cartItems, onAdd, onDelete, onDeleteAll, onRemove} = useBasket();

  return (
    <div>
   {location.pathname === "/" ?( <HomeNavbar 
   cartItems={cartItems} 
   onAdd = {onAdd}
   onDelete={onDelete} 
   onDeleteAll={onDeleteAll}
   onRemove={onRemove} 
   /> ) : (
  <OtherNavbar 
   cartItems={cartItems} 
   onDelete={onDelete} 
   onDeleteAll={onDeleteAll} 
   onRemove={onRemove}
   onAdd = {onAdd}
    />)}
      <Switch>
        <Route path="/products">
          <ProductsPage  onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
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

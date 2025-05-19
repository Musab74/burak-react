
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage  from "./screens/productsPage";
import OrdersPage  from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar  from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import useBasket from "./hooks/useBasket";
import { useState } from "react";
import '../css/app.css';
import '../css/navbar.css';
import "../css/footer.css";
import AuthenticationModal from "./components/auth";
import { T } from "../lib/types/common";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { Messages } from "../lib/config";
import MemberService from "./services/memberService";
import { useGlobals } from "./hooks/useGlobals";


function App() {
  const location = useLocation(); // qaytarishi object
  const {setAuthMember} = useGlobals();
  const {cartItems, onAdd, onDelete, onDeleteAll, onRemove} = useBasket();
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  // Handlers

  const handleSignupClose = () => setSignUpOpen(false)
  const handleLoginClose = () => setLoginOpen(false)

  const handleLogoutClick= (e:React.MouseEvent<HTMLElement>) => {
     setAnchorEl(e.currentTarget);
  }

  const handleCloseLogout = () => {
    setAnchorEl(null);
 }
 const handleLogoutRequest= async () =>  {
  try {
    const member = new MemberService();
    await member.logout();
    await sweetTopSuccessAlert("Succes", 700)
    setAuthMember(null);
  } catch (err) {
    console.log("error",err);
    sweetErrorHandling(Messages.error1)
    
  }
}

 
  

  return (
    <div>
   {location.pathname === "/" ?( <HomeNavbar 
   cartItems={cartItems} 
   onAdd = {onAdd}
   onDelete={onDelete} 
   onDeleteAll={onDeleteAll}
   onRemove={onRemove} 
   setSignUpOpen={setSignUpOpen}
   setLoginOpen={setLoginOpen}
   anchorEl={anchorEl}
   handleLogoutClick={handleLogoutClick}
   handleCloseLogout={handleCloseLogout}
   handleLogoutRequest = {handleLogoutRequest}
   /> ) : (
  <OtherNavbar 
   cartItems={cartItems} 
   onDelete={onDelete} 
   onDeleteAll={onDeleteAll} 
   onRemove={onRemove}
   onAdd = {onAdd}
   setLoginOpen={setLoginOpen}
   setSignUpOpen={setSignUpOpen}
   anchorEl={anchorEl}
   handleLogoutClick={handleLogoutClick}
   handleCloseLogout={handleCloseLogout}
   handleLogoutRequest = {handleLogoutRequest}
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

      <AuthenticationModal
      signupOpen={signUpOpen}
      loginOpen={loginOpen}
      handleSignupClose={handleSignupClose}
      handleLoginClose={handleLoginClose}
      />

    </div>
  )
}

export default App;

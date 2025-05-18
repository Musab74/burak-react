import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps {
    cartItems: CartItem[];
    onAdd: (item:CartItem) => void;
    onDelete: (item:CartItem) => void;
    onDeleteAll: () => void;
    onRemove: (item:CartItem) => void;
    setLoginOpen:(isOpen:boolean) => void;
    setSignUpOpen:(isOpen:boolean) => void;
}

export default function OtherNavbar(props:OtherNavbarProps) {
    const {cartItems, onAdd, onDelete, onDeleteAll, onRemove, setLoginOpen, setSignUpOpen} = props;

    const AuthMember = 0;
    return (
        <div className="other-navbar">
            <Container className="navbar-container">
                <Stack className="menu">
                    <Box>
                        <NavLink to="/">
                            <img className="brand-logo" src="/icons/burak.svg" alt="Brand Logo" />
                        </NavLink>
                    </Box>
                    <Stack className="links">
                        <Box className="hover-line">
                            <NavLink to="/">Home</NavLink>
                        </Box>
                        <Box className="hover-line">
                            <NavLink to="/products" activeClassName="underline">Products</NavLink>
                        </Box>
                        {AuthMember ? (
                            <Box className="hover-line">
                                <NavLink to="/orders" activeClassName="underline">Orders</NavLink>
                            </Box>
                        ) : null}
                        {AuthMember ? (
                            <Box className="hover-line">
                                <NavLink to="/member-page" activeClassName="underline">My Page</NavLink>
                            </Box>
                        ) : null}
                        <Box className="hover-line">
                            <NavLink to="/help" activeClassName="underline">Help</NavLink>
                        </Box>

                       
                         <Basket 
                            cartItems={cartItems}
                            onAdd={onAdd}
                            onDelete={onDelete}
                            onDeleteAll={onDeleteAll}
                            onRemove={onRemove} 
                         />
                        {!AuthMember ? (
                            <Box>
                                <Button variant="contained" className="login-button" onClick={() => setLoginOpen(true)}>Login</Button>
                            </Box>
                        ) : (
                            <img
                                className="user-avatar"
                                src="/icons/default-user.svg"
                                alt="User Avatar"
                                aria-haspopup="true"
                            />
                        )}
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}

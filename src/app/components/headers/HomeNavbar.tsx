import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
    cartItems:CartItem[];
    onAdd: (item:CartItem) => void;
    onDelete: (item:CartItem) => void;
    onDeleteAll: () => void;
    onRemove: (item:CartItem) => void;
}

export default function HomeNavbar(props:HomeNavbarProps) {
    const {cartItems, onAdd, onDelete, onDeleteAll, onRemove} = props;
    const AuthMember = null;
    const [count, setstate] = useState<number>(0);
    const [value, setvalue] = useState<boolean>(true)
    console.log("componentDidMount"); // DAta fetch jarayonida ishlatiladi
    useEffect(() => {
       setstate(count +1)

       return () => {
        console.log("componentWillUnmount");
       }
    }, [value]);
    // Handlers
    const buttonHandler = () => {
        setvalue(!value)
    }

    return (
        <div className="home-navbar">
            <Container className="navbar-container">
                <Stack className="menu"
                >
                    <Box>
                        <NavLink to="/">
                            <img className="brand-logo" src="/icons/burak.svg" />
                        </NavLink>
                    </Box>
                    <Stack
                        className="links"
                    >
                        <Box className={"hover-line"}>
                            <NavLink to="/" activeClassName={"underline"}>Home</NavLink>
                        </Box>
                        <Box className={"hover-line"}>
                            <NavLink to="/products" activeClassName={"underline"}>Products</NavLink>
                        </Box>
                        {AuthMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                            </Box>
                        ) : null}
                        {AuthMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/member-page" activeClassName={"underline"}>My Page</NavLink>
                            </Box>
                        ) : null}
                        <Box className={"hover-line"}>
                            <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
                        </Box>

                       
                        <Basket 
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onDelete={onDelete}
                        onDeleteAll={onDeleteAll}
                        onRemove={onRemove} 
                        />

                        {!AuthMember ? (<Box><Button variant="contained" className="login-button">Login</Button></Box>) : (
                            <img className="user-avatar"
                                src={"/icons/default-user.svg"}
                                aria-haspopup={"true"}
                            />
                        )}

                    </Stack>
                </Stack>
                <Stack className="header-frame">
                    <Stack className="detail">
                        <Box className="head-main-text" >
                            World's Most Delicious Cousine
                        </Box>
                        <Box className="wel-txt">The Choice, not just a choice</Box>
                        <Box className="service-txt">{count}  hours service</Box>
                        <Box className="signup" ></Box>
                        {!AuthMember ? (
                        <Button variant={"contained"}
                        className="signup-button"
                        onClick={() => buttonHandler()}>
                            Sign Up</Button>) : null}
                
                    </Stack>
                    <Box className="logo-frame">
                        <div className="logo-img"></div>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}

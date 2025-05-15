
import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(
    retrieveProducts,
    (products) => ({products})
)


const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebeb", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];



export default function Products() {
    const viewCount = 20;
    return (
        <div className="products" >
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className="avatar-big-box">
                        <Box className="top-text">
                            <Box className="category-title">Burak Restaraunt</Box>
                            <Box className="search-area">
                                <Box className="placeholder">Type here</Box>
                                <Box className="btn-box">
                                    <Button className="txt">
                                        SEARCH <SearchIcon className="icon" />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>


                    <Stack className="dishes-filter-section">
                        <Stack className="dishes-filter-box">
                            <div className="category-name">
                                <Button variant="contained" color="primary" className="order">
                                    New
                                </Button>
                                <Button variant="contained" color="secondary" className="order">
                                    Price
                                </Button>
                                <Button variant="contained" color="secondary" className="order">
                                    Views
                                </Button>
                            </div>
                        </Stack>
                    </Stack>

                    <Stack className="list-category-section">
                        <Stack className="product-category">
                            <div className="category-main">
                                <Button variant="contained" color="secondary">
                                    Other
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Dessert
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Drink
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Salad
                                </Button>
                                <Button variant="contained" color="primary">
                                    Dish
                                </Button>
                            </div>
                        </Stack>
                    </Stack>
                
                        <Stack className="product-wrapper">
                            {products.length !== 0 ? (
                                products.map((products, index) => {
                                    return (
                                        <Stack key={index} className="product-card">
                                            <Stack
                                                className="product-img"
                                                sx={{ background: `url(${products.imagePath})` }}
                                            >
                                                <div className="product-sale">Normal Size</div>
                                                <Button className="shop-btn">
                                                    <img
                                                        src={"/icons/shopping-cart.svg"}
                                                        style={{ display: "flex" }}
                                                    />
                                                </Button>
                                                <Button className="view-btn" sx={{ right: "36px" }}>
                                                    <Badge badgeContent={viewCount} color="secondary">
                                                        <RemoveRedEyeIcon
                                                            sx={{ color: viewCount > 0 ? "gray" : "white" }}
                                                        />
                                                    </Badge>
                                                </Button>
                                            </Stack>
                                            <Box className="product-desc">
                                                <span className="product-title">
                                                    {products.productName}
                                                </span>
                                                <div className="product-desc">
                                                    <MonetizationOnIcon />
                                                    {12}
                                                </div>
                                            </Box>
                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className="no-data">Products are not Available!</Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className="pagination-section" spacing={2}>
                        <Pagination
                            count={10}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
               
            </Container>

            <div className="brands-logo">
                <Container className="family-brands">
                    <Box className="category-title">Our Family Brands</Box>
                    <Stack className="brand-list">
                        <Box className="review-box">
                            <img src="/img/gurme.webp" />
                        </Box>
                        <Box className="review-box">
                            <img src="/img/seafood.webp" />
                        </Box>
                        <Box className="review-box">
                            <img src="/img/sweets.webp" />
                        </Box>
                        <Box className="review-box">
                            <img src="/img/doner.webp" />
                        </Box>
                    </Stack>
                </Container>
            </div>

            <div className="address">
                <Container>
                    <Stack className="address-area">
                        <Box className="title">Our address</Box>
                        <iframe
                            style={{ marginTop: "60px" }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26078.425809920423!2d129.06004480000001!3d35.21137005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35689386d85735e5%3A0x30705de360d66384!2sGeumgang%20Park!5e0!3m2!1sen!2skr!4v1745417113716!5m2!1sen!2skr"                             
                            height="500"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}
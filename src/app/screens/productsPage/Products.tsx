
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { Product, ProductInquiry } from "../../../lib/types/product";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(
    retrieveProducts,
    (products) => ({ products })
)

interface ProductsProps {
    onAdd:(item:CartItem) => void;
}


export default function Products(props:ProductsProps) {
    const {onAdd} = props

    const { setProducts } = actionDispatch(useDispatch());
    const { products } = useSelector(productsRetriever);
    const [productSearch, setProductSearch] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
    });
    const [searchText, setSearchText] = useState<string>("");
    const history = useHistory();


    useEffect(() => {
        const product = new ProductService();
        product
            .getProducts(productSearch)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, [productSearch]);

    useEffect(() => {
        if (searchText === "") {
            productSearch.search = "";
            setProductSearch({ ...productSearch })
        }
    }, [searchText])


    //HANDLER SECTION
    const searchCollectionHandler = (collection: ProductCollection) => {
        productSearch.page = 1;
        productSearch.productCollection = collection;
        setProductSearch({ ...productSearch });

    };

    const searchOrderHandler = (order: string) => {
        productSearch.page = 1;
        productSearch.order = order;
        setProductSearch({ ...productSearch });

    }

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch })
    }

    const paginationHandler = (e: ChangeEvent<any>, value:number) => {
       productSearch.page = value;
       setProductSearch({...productSearch});
    }

    const chooseDishHandler = (id: string) => {
      history.push(`/products/${id}`);
    }


    return (
        <div className="products" >
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className="avatar-big-box">
                        <Box className="top-text">
                            <Box className="category-title">Burak Restaraunt</Box>
                            <Box className="search-area">
                                <input
                                    className="placeholder"
                                    type="search"
                                    name="singleResearch"
                                    placeholder="Type here"


                                    value={searchText}
                                    onChange={(e) => {
                                        setSearchText(e.target.value)
                                        
                                    }}
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter") searchProductHandler();
                                    }}
                                />
                                <Box className="btn-box">
                                    <Button className="txt"
                                        
                                        onClick={searchProductHandler}
                                    >
                                        SEARCH <SearchIcon className="icon" />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>


                    <Stack className="dishes-filter-section">
                        <Stack className="dishes-filter-box">
                            <div className="category-name">
                                <Button variant="contained"
                                    color={productSearch.order === "createdAt" ? "primary" : "secondary"}
                                    className="order"
                                    onClick={() => searchOrderHandler("createdAt")}
                                >
                                    New
                                </Button>
                                <Button variant="contained" color={productSearch.order === "productPrice" ? "primary" : "secondary"}
                                    className="order"
                                    onClick={() => searchOrderHandler("productPrice")}>
                                    Price
                                </Button>
                                <Button variant="contained" color={productSearch.order === "productViews" ? "primary" : "secondary"}
                                    className="order"
                                    onClick={() => searchOrderHandler("productViews")}>
                                    Views
                                </Button>
                            </div>
                        </Stack>
                    </Stack>

                    <Stack className="list-category-section">
                        <Stack className="product-category">
                            <div className="category-main">
                                <Button variant="contained" color={productSearch.productCollection === ProductCollection.OTHER ? "primary" : "secondary"}
                                    onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
                                >
                                    Other
                                </Button>
                                <Button variant="contained" color={productSearch.productCollection === ProductCollection.DESSERT ? "primary" : "secondary"}
                                    onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}

                                >
                                    Dessert
                                </Button>
                                <Button variant="contained" color={productSearch.productCollection === ProductCollection.DRINK ? "primary" : "secondary"}
                                    onClick={() => searchCollectionHandler(ProductCollection.DRINK)}>
                                    Drink
                                </Button>
                                <Button variant="contained" color={productSearch.productCollection === ProductCollection.SALAD ? "primary" : "secondary"}
                                    onClick={() => searchCollectionHandler(ProductCollection.SALAD)}>
                                    Salad
                                </Button>
                                <Button variant="contained" color={productSearch.productCollection === ProductCollection.DISH ? "primary" : "secondary"}
                                    onClick={() => searchCollectionHandler(ProductCollection.DISH)}>
                                    Dish
                                </Button>
                            </div>
                        </Stack>
                    </Stack>

                    <Stack className="product-wrapper">
                        {products.length !== 0 ? (
                            products.map((product: Product,) => {
                                const imagePath = `${serverApi}/${product.productImages[0]}`
                                const sizeVolume = product.productCollection === ProductCollection.DRINK ?
                                    product.productVolume + " litre" :
                                    product.productSize + " size";
                                return (
                                    <Stack key={product._id} className="product-card"
                                    onClick={() => chooseDishHandler(product._id)}
                                    >
                                        <Stack
                                            className="product-img"
                                            sx={{ background: `url(${imagePath})` }}
                                        >
                                            <div className="product-sale">{sizeVolume}</div>
                                            <Button className="shop-btn"
                                            onClick={(e) => {
                                                onAdd({
                                                    _id:product._id,
                                                    quantity: 1,
                                                    name:product.productName,
                                                    price:product.productPrice,
                                                    image:product.productImages[0],
                                                });
                                                e.stopPropagation();
                                            }}
                                            >
                                                <img
                                                    src={"/icons/shopping-cart.svg"}
                                                    style={{ display: "flex" }}
                                                />
                                            </Button>
                                            <Button className="view-btn" sx={{ right: "36px" }}>
                                                <Badge badgeContent={product.productViews} color="secondary">
                                                    <RemoveRedEyeIcon
                                                        sx={{ color: product.productViews === 0 ? "gray" : "white" }}
                                                    />
                                                </Badge>
                                            </Button>
                                        </Stack>
                                        <Box className="product-desc">
                                            <span className="product-title">
                                                {product.productName}
                                            </span>
                                            <div className="product-desc">
                                                <MonetizationOnIcon />
                                                {product.productPrice}
                                            </div>
                                        </Box>
                                    </Stack>
                                );
                            })
                        ) : (
                            <Box
                                marginTop={22}
                                marginBottom={25}
                                className="no-data">Products are not Available!</Box>
                        )}
                    </Stack>
                </Stack>

                <Stack className="pagination-section" spacing={2}>
                    <Pagination
                        count={products.length !== 0 ? productSearch.page + 1 : productSearch.page}
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                                color="secondary"/>
                        )}
                        onChange={paginationHandler}
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
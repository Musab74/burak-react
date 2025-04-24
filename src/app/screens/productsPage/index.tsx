import { Container } from "@mui/material";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import Products from "./Products";
import "../../../css/products.css"
import ChosenProduct from "./ChosenProduct";

export default function ProductsPage() {
    const products = useRouteMatch();

    return (
        <div className="products-page">
            <Switch>
                <Route path={`${products.path}/:productId`}>
                    <ChosenProduct></ChosenProduct>
                </Route>
                <Route path={`${products.path}`}>
                    <Products />
                </Route>
            </Switch>
        </div> 
    );
}
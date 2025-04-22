import { Container } from "@mui/material";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import ChosenProduct from "./Chosenproduct";
import Products from "./Products";

export default function ProductsPage() {
    const products = useRouteMatch();

    return (
        <div className="products-page">
            <Switch>
                <Route path={`${products.path}/:productsId`}>
                    <ChosenProduct></ChosenProduct>
                </Route>
                <Route path={`${products.path}`}>
                    <Products />
                </Route>
            </Switch>
        </div> >
    );
}
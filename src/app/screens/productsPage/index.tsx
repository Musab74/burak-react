import { Container } from "@mui/material";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import Products from "./Products";
import "../../../css/products.css";
import ChosenProduct from "./ChosenProduct";
import { CartItem } from "../../../lib/types/search";

interface ProductPageProps {
    onAdd:(item:CartItem) => void;
}

export default function ProductsPage(props:ProductPageProps) {
    const {onAdd} = props;

    const products = useRouteMatch();

    return (
        <div className="products-page">
            <Switch>
                <Route path={`${products.path}/:productId`}>
                    <ChosenProduct onAdd={onAdd} />
                </Route> 
                <Route path={`${products.path}`}>
                    <Products onAdd={onAdd} />
                </Route>
            </Switch>
        </div> 
    );
}
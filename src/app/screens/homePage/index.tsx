import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css"
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/memberService";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
    setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
    setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});


export default function HomePage() {
    const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(useDispatch());

    useEffect(() => {
        //Backend data fetch place

        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            productCollection: ProductCollection.DISH,
        })
            .then(data => {
                console.log("data passed here", data);

                setPopularDishes(data);
            })
            .catch((err) => { throw err })

        product.getProducts({
            page: 1,
            limit: 4,
            order: "createdAt",
            productCollection: ProductCollection.DISH,
        })
            .then(data => {
                setNewDishes(data);
            })
            .catch((err) => console.log("error", err));

        const member = new MemberService();
        member
            .getTopUsers()
            .then((data) => setTopUsers(data))
            .catch(err => console.log("error occured"))

    }, []);



    return <div className={"homepage"}>
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>
}
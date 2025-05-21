import { Member } from "./member";
import { Order } from "./orders";
import { Product } from "./product";

// React App State

export interface AppRootState {
    homepage:HomePageState;
    productPage: ProductPageState;
    ordersPAge: OrdersPageState;
}
//HOMEPAGE
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

//PRODUCT PAGE
export interface ProductPageState {
    restaurant: Member | null;
    products:Product[];
    chosenProduct:Product | null;
    
}

//ORDERS PAGE
export interface OrdersPageState{
    pausedOrders:Order[];
    processOrders:Order[];
    finishedOrders:Order[];
}
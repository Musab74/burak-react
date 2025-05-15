import { Member } from "./member";
import { Product } from "./product";

// React App State

export interface AppRootState {
    homepage:HomePageState;
    productPage: ProductPageState;
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
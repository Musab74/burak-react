import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItem {
    _id: string;
    itemQuantity:number;
    itemPrice: number;
    orderId: string;
    productId: string;
    createAt:Date;
    updatedAt:Date;
}

export interface Order{
    _id: string;
    orderTotal: number;
    orderDelivery: number;
    ordetStatus: OrderStatus;
    memberId: string;
    createAt: Date;
    updatedAt: Date;
    // From aggregations
    orderItems:[];
    productDate: Product[];
}

export interface OrderItemInput {
    itemQuantity: number,
    itemPrice: number,
    productId:string,
    orderId?:string;
}

export interface OrderInquiry {
    page:number,
    limit:number,
    orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
    orderId: string;
    orderStatus: OrderStatus;
}
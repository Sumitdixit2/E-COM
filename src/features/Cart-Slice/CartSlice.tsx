import type { Product } from "@/api/userApi"
import { create } from "zustand"
import {persist} from "zustand/middleware"


type CartList = {
    CartLi: Product[],
    addToCart:(product:Product,count:number) => void,
    removeFromCart: (id:number) => void,
}

export const useCartListStore = create<CartList>()(persist((set) => ({
    CartLi:[],
    subtotal:0,
    addToCart: (product,count) => 
        set((state) => {
            if(!state.CartLi.find((p) => p.id == product.id)) {
                const updatedCart = [...state.CartLi,product];
                const newSubTotal = updatedCart.reduce((sum,product) => sum + product.price * count,0);
                return {CartLi:updatedCart,subtotal:newSubTotal}
            }

            return state;
        }),
    removeFromCart:(id) =>
        set((state) => ({
           CartLi: state.CartLi.filter((p) => p.id !== id),
        })),
}),{
    name:"cart-storage"
}))
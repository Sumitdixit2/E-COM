import {create} from "zustand"
import type { Product } from "@/api/userApi"
import { persist } from "zustand/middleware"

type wishList = {
    wishlist:Product[],
    addToWishList: (product:Product) => void,
    removeFromWIshList:(id:number) => void,
    clearWishList:() => void,
}

export const usewishListStore = create<wishList>()(persist((set) => ({
    wishlist:[],
    addToWishList:(product) => 
        set((state) => {
            if(!state.wishlist.find((p) => p.id === product.id)){
                return {wishlist : [...state.wishlist,product]}
            }
            return state;
        }),
        removeFromWIshList:(id) => 
            set((state) => ({
                wishlist: state.wishlist.filter((p) => p.id !== id),
            })),
        clearWishList: () => set({wishlist:[]})
}),{
    name:"wish-store"
}))
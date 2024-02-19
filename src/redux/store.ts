import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import AuthSlice from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        auth: AuthSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()




// interface UserResponse {
//     name: string;
//     token: string;
// }

// interface AuthInfo {
//     username: string;
//     password: string;
// }

// interface AuthState {
//     userInfo: UserResponse | null,
//     error: string | null,
// }

// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

// interface CartItem extends Product {
//     cartQuantity: number,
// }

// interface Cart {
//     cartItems: CartItem[],
//     cartTotalAmount: number,
//     cartTotalQuantity: number,
//     cartTotalDiscount: number,
// }
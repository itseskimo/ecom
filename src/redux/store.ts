import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import authSlice from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        auth: authSlice
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
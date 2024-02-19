import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import AuthSlice from "./features/auth/AuthSlice";
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




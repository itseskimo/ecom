import { createSlice } from "@reduxjs/toolkit";


const localStorageAvailable = typeof localStorage !== 'undefined';


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorageAvailable && localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0,
        cartTotalDiscount: 0,
    } as Cart,



    reducers: {

        add(state, action) {
            let existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex].cartQuantity += 1;
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
            };
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },




        increase(state, action) {
            const tempIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            state.cartItems[tempIndex].cartQuantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },






        remove(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );

                    state.cartItems = nextCartItems;
                }
                return state;
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },



        getTotals(state) {
            let { cartTotalAmount, cartTotalQuantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.cartTotalAmount += itemTotal;
                cartTotal.cartTotalQuantity += cartQuantity;

                return cartTotal;
            },
                {
                    cartTotalAmount: 0,
                    cartTotalQuantity: 0,
                }
            );
            state.cartTotalAmount = parseFloat(cartTotalAmount.toFixed(2))
            state.cartTotalQuantity = cartTotalQuantity

        },


        clearCart(state) {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },


        decrease(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;


            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = nextCartItems;
            };
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }


    },



},
);

export default cartSlice.reducer;
export const {add, increase, decrease, getTotals,remove } = cartSlice.actions
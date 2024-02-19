
export interface User {
    image: undefined;
    email: undefined;
    name: string;
}

export interface Session {
    user: User;
    expires: string;
    name: string;
    token: string
    error: string;
}

export interface NavbarProps {
    session: Session | null;
}

export interface ProductProps {
    allProducts: Product[];
}

export interface UserSignInResponse {
    message: string;
}

export interface UserSignUpResponse {
    name: string;
    token: string;
}

export interface AuthInfo {
    username: string;
    password: string;
}

export interface AuthState {
    userInfo: UserSignInResponse | null,
    error: string | null,
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface CartItem extends Product {
    cartQuantity: number,
}

export interface Cart {
    cartItems: CartItem[],
    cartTotalAmount: number,
    cartTotalQuantity: number,
    cartTotalDiscount: number,
}
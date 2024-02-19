import { Product } from "../env";
  
  export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`https://fakestoreapi.com/products`, { cache: 'no-store' });
    const response: Product[] = await res.json();
    return response;
  }
  
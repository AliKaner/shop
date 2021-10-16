import React, {useState, useEffect} from "react";
import {Products} from "./components/Products/Products";
import {commerce} from "./lib/commerce";
import {Navbar} from "./components/Navbar";

export const App= () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quanitity) => {
        const item = await commerce.cart.add(productId,quanitity);
        setCart(item.cart);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
    return(
        <div>
            <Navbar/>
            <Products products={products} onAddToCart={handleAddToCart()}/>

        </div>
    );
    console.log(<Products/>)
}

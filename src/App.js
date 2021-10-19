import React, {useState, useEffect} from "react";
import {Products} from "./components/Products/Products";
import {commerce} from "./lib/commerce";
import {Navbar} from "./components/Navbar";
import  {Cart} from "./components/Cart";

export const App= () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.list());
    }
    const handleAddToCart = async (productId, quentitiy) => {
        const item= await commerce.cart.add(productId, quentitiy);
        setCart(item.cart)
    }

    useEffect(() =>{
        fetchProducts();
        fetchCart();
    },[]);

    console.log(<Products/>)
    return(
        <div>
            <Navbar totalItems={cart.total_items}/>
            <Products products={products} onAddToCart={handleAddToCart}/>
            <Cart cart = {cart}/>
        </div>
    );

}

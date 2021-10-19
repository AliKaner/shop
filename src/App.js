import React, {useState, useEffect} from "react";
import {Products} from "./components/Products/Products";
import {commerce} from "./lib/commerce";
import {Navbar} from "./components/Navbar";

export const App= () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve)
    }

    useEffect(() =>{
        fetchProducts();
    },[]);

    console.log(<Products/>)
    return(
        <div>
            <Navbar/>
            <Products products={products}/>

        </div>
    );

}

import React, {useState, useEffect} from "react";
import {Products} from "./components/Products/Products";
import {commerce} from "./lib/commerce";
import {Navbar} from "./components/Navbar";

export const App= () => {
    const [products,setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
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

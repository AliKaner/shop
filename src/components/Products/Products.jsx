import React from "react";
import {Grid}from "@material-ui/core";
import {Product} from "./Product";

 const products = [
    {id: 1, name: 'Shoes' , description: 'Running shoes', price: '$5',image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 2,name: 'Mac' , description: 'iMac-pro', price: '$5', image: 'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
];

export const Products = () => {
    return(
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

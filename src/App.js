import React from "react";
import {Products} from "./components/Products/Products";
import {Navbar} from "./components/Navbar";

export const App= () => {
    return(
        <div>
            <Navbar/>
            <Products/>

        </div>
    );
    console.log(<Products/>)
}

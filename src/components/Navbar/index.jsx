import React from "react";
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyle from './style'
export const Navbar = ({totalItems}) => {
    const classes = useStyle();
    return (
        <>
            <AppBar position= "fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src='https://www.lifepng.com/wp-content/uploads/2020/07/1594327258_Smoke-png-HD.png' alt="Shop.js" height="25px" className={classes.image}/>
                        Shop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Sepeti Göster" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

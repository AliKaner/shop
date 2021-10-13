import React from "react";
import {AppBar, Toolbar, IconButton, Badge, MenuItem, mENU, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import useStyles from ''
const Navbar = () => {
    return (
        <>
            <AppBar position= "fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="Shop.js" height="25px" className={classes.image}/>
                        Shop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Sepeti Göster" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

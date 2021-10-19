import React from "react";
import {Container,Typography,Button,Grid} from "@material-ui/core";

const Cart = () => {
    const isEmpty = true;
    const EmptyCart = () => (
        <Typography variant="subtitle1">SEPET BOS</Typography>
    )
    return(
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Sepet</Typography>
            {isEmpty ? <EmptyCard/> : <FilledCart />}
        </Container>
    )
}
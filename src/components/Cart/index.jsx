import React from "react";
import {Container,Typography,Button,Grid} from "@material-ui/core";

export const Cart = ({cart}) => {
    const isEmpty = !cart.line_items.length;
    const EmptyCart = () => (
        <Typography variant="subtitle1">SEPET BOS</Typography>
    )

    const FilledChart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map() =>(
                    <Grid item xs = {12} sm = {4} key = {item.id}>
                    <div> {item.name}</div>
                    </Grid>

                )}
            </Grid>
            <div className = {classes.cardDetails}>
                    <Typography variant="h4"> Subtotal: {card.subtotal.formated_with_symbol}</Typography>
            </div>
            <div>
                <Button className = {classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty</Button>
                <Button className = {classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Check out</Button>
            </div>
        </>
    )


    return(
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Sepet</Typography>
            {isEmpty ? <EmptyCard/> : <FilledCart />}
        </Container>
    )
}


import {Container, Typography, Button, Grid } from '@material-ui/core';
import Cartitem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import useStyles from './styles';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart  }) => {
     
    const isEmpty = !cart || !cart.line_items ||  !cart.line_items.length;
    const styles = useStyles();
    const classes = styles

    const EmptyCart = () => ( <Typography variant="subtitle1">No items in your Cart
    
    <Link to="/" className={classes.link}><br></br>Start adding something to your Cart</Link>! 🛍️
    
    </Typography>
 

 );


 const FilledCart = () => (
    <>
     <Grid container spacing={3}>

     {cart.line_items.map((item) => (
         <Grid item xs={12} sm={4} key={item.id}>
             <Cartitem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
         </Grid>
     ))}
     </Grid>
     <div className={classes.cardDetails}>
         <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
     </div>

     <div>
         <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
         <Button component={ Link } to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
     </div>
    </>
 );


  return (
    <Container>
<div className={classes.toolbar} />
<Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>

           {isEmpty ? <EmptyCart /> : <FilledCart />}
            </Container>
  )
}
export default Cart
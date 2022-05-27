import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import UseStyles from './styles';



const products = [
    { id: 1, name: 'Shirt', descripition: 'Tee shirt.',  price: '$1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPP5FiZ8iA--L8dbLl6clysjHliYef0l6Hw&usqp=CAU' },
    { id: 2, name: 'Shorts', descripition:  'Cycling shorts.',   price: '$2', image: 'https://s7d2.scene7.com/is/image/academy/20267157?$pdp-mobile-gallery-ng$' },
];


const Products = () => {
  const classes = UseStyles();

  return (
   <main className={classes.content}>
     <div className={classes.toolbar} />

       <Grid container justifyContent="center" spacing={4}>

          {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
               <Product product={product} />
              </Grid>
          ))} 

        </Grid>
  </main>
  );
}

export default Products;
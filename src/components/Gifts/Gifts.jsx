import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'

const Gifts = () => {
  const products = [
    {name: 'Airfryer Philips Walita', price: '449,90', image: 'airfryer.png'},
    {name: 'Aspirador de Pó Elecrolux', price: '259,00', image: 'aspirador.png'},
    {name: 'Máquina de Café Mini Me', price: '399,90', image: 'cafeteira.png'},
    {name: 'Geladeira Brastemp Inox', price: '2999,90', image: 'geladeira.png'},
    {name: 'Lavadora de Roupas Panasonic', price: '1999,90', image: 'roupas.png'},
  ]
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 5 }}>
        {products.map((product, index) => (
          <Grid item xs key={index}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Product name={product.name} price={product.price} image={product.image}/>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Gifts
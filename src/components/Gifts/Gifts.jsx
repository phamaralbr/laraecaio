import React from 'react'
import { Container } from '@mui/material'
import Product from './Product'
import MainLabel from '../MainLabel/MainLabel'
import { Grid } from './GiftsElements'
import './Gifts.css'

const Gifts = () => {
  const products = [
    {name: 'PIX', price: 'Valor Livre', image: 'pix'},
    {name: 'Airfryer Philips Walita', price: 449.90, image: 'airfryer.png'},
    {name: 'Aspirador de Pó Electrolux', price: 259.00, image: 'aspirador.png'},
    {name: 'Máquina de Café Mini Me', price: 399.90, image: 'cafeteira.png'},
    {name: 'Geladeira Brastemp Inox', price: 2999.90, image: 'geladeira.png'},
    {name: 'Lavadora de Roupas Panasonic', price: 1999.90, image: 'roupas.png'},
    {name: 'Liquidificador Philips Walita', price: 169.90, image: 'liquidificador.png'},
    {name: 'Smart TV Philips', price: 2449.90, image: 'tv.png'},
    {name: 'Ferro a Vapor Philips Walita', price: 349.90, image: 'ferro.png'},
    {name: 'Faqueiro Inox Tramontina 130 Peças', price: 3599.90, image: 'faqueiro.png'},
  ]
  return (
    <div id="presentes">
      <MainLabel label='Presentes'/>
      <Container>
        <Grid>
          {products.map((product, index) => (
              <Product key={index} name={product.name} price={product.price} image={product.image}/>
          ))}
        </Grid>
      </Container>
      <br style={{marginBottom: '200px'}}/>
    </div>
  )
}

export default Gifts
import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../api';
import { categorie } from '../constans'
import useFetch from '../hooks/useFetch';
import '../components/Product/Product.css'
import { motion } from 'framer-motion';

import MiniCategorie from '../components/MiniMenu/MiniCategorie';
import Checkout from '../components/Checkout/Checkout';


export const Product = () => {
   const {categorie} = useParams();
   const [products,productError,productLoading] = useFetch(API[categorie])

   console.log(products);
  return (
    <motion.div className='products'>
     
    <MiniCategorie />
     <ul className='products-cards'>
       
       {productLoading && <p>Loading...</p>}
      {productError && <p>Something went wrong...</p>}
      {products && (
        <>
          
           {products[categorie].map((product)=> {
             let img = null;
              try {
                 img = require(`../assets/img/${product.picture}`)
              } catch (error) {
                console.log(img);
              }
              
              return (
                <Link to={"/products/detail:id"}>                  
                    <li className='products-card'
                      intial={{width: 0}}
                      animate={{width: "100%"}}
                      exit={{x: window.innerWidth, transition: {duration: 0.5} }}
                      >
                      <img  className='products__card--foto' src={img} alt="" />
                      <h2 className='products__card--title'>{product.name}</h2>
                      <price className='products__card--price'>{product.price}</price>
                  </li>
                </Link>

              )
           
            })}
          
        </>
      )}
      
       </ul> 
       
       <Checkout/>
    </motion.div>
  )
}

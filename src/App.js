import './App.css';
import {Home} from './pages/Home';
import { Product } from './pages/Product';
import Products from './pages/Products'
import {Routes, Route, Link, Router, useLocation} from 'react-router-dom';
import {createContext, useState} from 'react'
import { AnimatePresence } from 'framer-motion';
import Betaal from './pages/Betaal'
import BaseLayout from './layouts/BaseLayout';
import ProductDetail from './pages/ProductDetail';


const ShoppingProductContext = createContext();


function App() {
  
  const location = useLocation()

  const [product, setProduct] = useState(0)
  return (
    <div>
        <AnimatePresence>
          <ShoppingProductContext.Provider value="1">
             <Routes location={location} key={location.pathname}>
                <Route path="/" element={<BaseLayout/>}>
                  <Route index element={<Home />}/>
                  <Route path="products" element={<Products />}/>
                  <Route path="products/:categorie" element={<Product />}/>
                  <Route path="products/detail" element={<ProductDetail />}/>
                  <Route path="checkout" element={<Betaal />}/>
                </Route>
              </Routes>
          </ShoppingProductContext.Provider>
             
        </AnimatePresence>
      
    </div>
  );
}

export default App;

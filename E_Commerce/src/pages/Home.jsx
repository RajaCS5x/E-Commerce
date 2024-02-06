import React from 'react'
import { Container} from 'react-bootstrap';
import Product from '../components/Product'
import styles from './Home.module.css'
function Home({products,addToCart}) {

  
 

  return (
    <Container className={styles.container}>
   
        {products.map((item) => (
        
            <Product item={item} addToCart={addToCart} />
          
        ))}
      
    </Container>
  )
}

export default Home
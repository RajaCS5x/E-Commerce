import React from 'react'
import { Container} from 'react-bootstrap';
import Product from '../components/Product'

function Home({products}) {
  return (
    <Container style={{display:'flex',flexWrap:'wrap',minWidth:'250px',justifyContent:"space-around",minHeight:"38rem"}}>
   
        {products.map((item) => (
        
            <Product item={item} />
          
        ))}
      
    </Container>
  )
}

export default Home
import {createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import productslist from "./assets/productslist"
import {useState} from "react"


export function App() {
 
  const [products, setproducts] = useState(productslist);

  const addToCart = (itemId) => {
    setproducts((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, inCart: true } : item))
    );
  };

  const removeFromCart = (itemId) => {
    setproducts((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, inCart: false } : item))
    );
  };


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home products={products} addToCart={addToCart} />}/>
      <Route path="Cart" element={<Cart 
     items={products.filter((item) => item.inCart) } removeFromCart={removeFromCart}
      />}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

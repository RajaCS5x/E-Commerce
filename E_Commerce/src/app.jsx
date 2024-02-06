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
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home products={products}/>}/>
      <Route path="Cart" element={<Cart/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

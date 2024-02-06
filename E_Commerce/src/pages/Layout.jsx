import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from "./Layout.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";

function Layout() {
  return (
    <>
    <nav className={styles.navbar}>
      <div>
        <FaShop className={styles.homeicon} />
      <a 
      className={styles.heading}
      ><span
      className={styles.head}
      >E</span>-Shop</a>
      </div>
      <ul className={styles.menu}>
        <li ><Link to="/" className={styles.item}> <AiFillHome /> HomePage</Link></li>
        <li><Link to="Cart" className={styles.item}> <FaShoppingCart/> Cart</Link></li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout;
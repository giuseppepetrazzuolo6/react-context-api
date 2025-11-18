import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import BudgetContext from "./contexts/BudgetContext"
import DefaultLeyout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import Product from "./pages/Product"

function App() {
  const productsApiUrl = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([])
  const [budgetMode, setBudgetMode] = useState(false)

  function toggleBudgetMode() {
    setBudgetMode(budget => !budget)
  }

  function getProducts() {
    axios.get(productsApiUrl)
      .then(response => {
        const productsList = response.data
        setProducts(productsList)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = budgetMode ? products.filter(item => item.price <= 30) : products;

  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode, toggleBudgetMode, filteredProducts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLeyout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App

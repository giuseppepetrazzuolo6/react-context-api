import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import BudgetContext from "./contexts/BudgetContext"
import DefaultLeyout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import Product from "./pages/Product"

function App() {
  const [budgetMode, setBudgetMode] = useState(false)

  return (
    <>

      <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
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

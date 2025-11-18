import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const { budgetMode, toggleBudgetMode } = useContext(BudgetContext);

    return (
        <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
            <div className="nav navbar-nav d-flex gap-5 mx-auto">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/about">Chi siamo</NavLink>
                <NavLink className="nav-item nav-link" to="/products">Prodotti</NavLink>
                <button className={`btn ${budgetMode ? "btn-success" : "btn-secondary"}`} onClick={toggleBudgetMode}>
                    {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                </button>
            </div>
        </nav>
    )
}
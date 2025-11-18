import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
                <div className="nav navbar-nav d-flex gap-5 mx-auto">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/about">Chi siamo</NavLink>
                    <NavLink className="nav-item nav-link" to="/products">Prodotti</NavLink>
                </div>
            </nav>
        </header>
    );
}

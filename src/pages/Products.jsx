import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";
import { Link } from 'react-router-dom';

export default function Products() {
    const { filteredProducts } = useContext(BudgetContext)

    return (
        <div className="container p-4">
            <h1>I nostri Articoli</h1>
            <div className="row g-3">
                {
                    filteredProducts.map(item =>
                        < div className="col-12 col-md-6 col-lg-4" key={item.id}>
                            <div className="card h-100">
                                <div className="card-img-top p-3">
                                    <img className="product-img" src={item.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>{item.title}</h3>
                                    <span>{item.price}&euro;</span>
                                </div>
                                <Link className='btn btn-dark m-3' to={`/products/${item.id}`}>Visualizza l'articolo</Link>
                            </div>
                        </div>
                    )
                }
            </div >
        </div>
    )
}
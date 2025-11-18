import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export default function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    function getProduct() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response);

                setProduct(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row g-3">
                <div className="col-12 col-md-4">
                    <div className="card_image">
                        <img src={product?.image} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <h3 className="mt-3">{product?.title}</h3>
                    <span>{product?.price}&euro;</span>
                    <p className="mt-5">{product?.description}</p>
                    <Link className='btn btn-dark' to={`/products`}>Torna agli articoli</Link>
                </div>
            </div>
        </div>
    )
}
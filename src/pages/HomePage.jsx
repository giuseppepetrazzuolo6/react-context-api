import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    };

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Benvenuto nel nostro Store Online!</h1>
                <p className="col-md-8 fs-4">
                    Siamo felici di averti qui. <br />
                    Nel nostro shop troverai prodotti selezionati con cura,
                    qualità garantita e un servizio dedicato a offrirti la migliore esperienza possibile. <br />
                    Dai un’occhiata alle nostre categorie, scopri le novità e lasciati ispirare dalle nostre proposte.
                    Se hai dubbi o domande, siamo sempre a tua disposizione!
                </p>
                <button
                    className="btn btn-dark btn-lg"
                    type="button"
                    onClick={handleClick}>
                    Scopri di più
                </button>
            </div>
        </div>

    )
}
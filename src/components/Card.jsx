import { handleDelete } from "../components/handleDelete";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


export const Card = ({ contact }) => {
    const { dispatch } = useGlobalReducer();

    return (
        <div className="card m-2" style={{ width: "15rem" }}>
            <img src="src/assets/img/8102780.png" className="card-img-top" alt="Contact" />
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.phone}</p>
                <p className="card-text">{contact.address}</p>
                <button onClick={() => handleDelete(contact.id, dispatch)} className="btn btn-danger">Eliminar</button>
                <Link to={`/edit/${contact.id}`}>
                    <button className="btn btn-secondary m-1">Editar</button>
                </Link>
            </div>
        </div>
    );
}
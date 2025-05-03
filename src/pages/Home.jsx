import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";

const Home = () => {
    const { store, dispatch } = useGlobalReducer();


    const fetchContacts = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Elias/contacts");
            if (!response.ok) throw new Error("Error al obtener contactos");
            const data = await response.json();
            dispatch({ type: "SET_CONTACTS", payload: data.contacts });
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);


    if (store.contacts.length === 0) {
        return (
            <div>
                <h2> No hay Contactos</h2>
                <Link to="/addcontact">
                    <button>Agregar Contacto</button>
                </Link>
            </div>
        );
    }
    if (store.contacts.length > 0) {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h2> Contactos </h2>
                    <Link to="/addcontact">
                        <button className="btn btn-secondary m-1">Agregar Contacto</button>
                    </Link>
                </div>

                <div className="d-flex flex-wrap">
                    {store.contacts.map((contact, index) => (
                        <div className="d-flex" key={index}>
                            <Card contact={contact} />
                        </div>
                    ))
                    }
                </div>


            </div>
        );
    }

};

export default Home;

import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "Elias"
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Elias/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) throw new Error("Error al crear contacto");

            dispatch({ type: "ADD_CONTACT", payload: form });
            setForm({ name: "", email: "", phone: "", address: "", agenda_slug: "Elias" });
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return (
        < >
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" />
                    <input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" />
                    <button className="btn btn-secondary m-1" type="submit">Agregar</button>

                </div>
            </form>

            <Link to="/">
                <button>Regresar</button>
            </Link>
        </>
    );
};

export default ContactForm;

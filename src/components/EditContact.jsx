import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const navigate = useNavigate();

    const contact = store.contacts.find(c => c.id === parseInt(id));

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "Elias"
    });

    useEffect(() => {
        if (contact) {
            setForm({
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
                agenda_slug: "Elias"
            });
        }
    }, [contact]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Elias/contacts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) throw new Error("Error al actualizar contacto");

            const updated = await response.json();

            dispatch({ type: "UPDATE_CONTACT", payload: updated });
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    if (!contact) return <p>Contacto no encontrado</p>;

    return (
        <div className="container mt-4">
            <h2>Editar Contacto</h2>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" />
            <button className="btn btn-primary mt-2" onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default EditContact;



export const handleDelete = async (id,dispatch) => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/Elias/contacts/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) throw new Error("Error al eliminar contacto");

        dispatch({ type: "REMOVE_CONTACT", payload: id });
    } catch (error) {
        console.error("Error:", error);
    }
}

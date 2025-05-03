import React, { useEffect } from "react";

export const UserCreate = () => {
    
    useEffect(() => {
        getUser();
    }
    , []);

    const getUser = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Elias", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                createUser();
            }

            const result = await response.json();
            console.log("User fetched successfully:", result);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const createUser = async () => {

        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Elias", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log("User created successfully:", result);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };
};
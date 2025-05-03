
import { useContext, useReducer, createContext, useState } from "react";
import storeReducer, { initialStore } from "../store"


const StoreContext = createContext()


export function StoreProvider({ children }) {

    const [store, dispatch] = useReducer(storeReducer, initialStore)
    const [isLoading, setLoading] = useState(true)

    return <StoreContext.Provider value={{ store, dispatch, isLoading, setLoading }}>
        {children}
    </StoreContext.Provider>
}


export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}
import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const logout = () => {
        localStorage.removeItem('aToken');
        setAToken('');
        window.location.href = "/admin/login"; 
    };

    const value = {
        aToken,
        setAToken,
        backendUrl,
        logout,
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
} 

export default AdminContextProvider;

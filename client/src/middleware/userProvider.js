import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "", auth: true, id: "" });

    const login = (name, id) => {
        setUser((user) => ({
            name: name,
            auth: true,
            id: id
        }));
        window.localStorage.setItem("username", JSON.stringify(name));
        window.localStorage.setItem("id", id);
        window.localStorage.setItem("auth", JSON.stringify(true));
        console.log(window.localStorage.getItem("username"));
        console.log(window.localStorage.getItem("id"));
        console.log(window.localStorage.getItem("auth"));
    };

    const logout = () => {
        setUser((user) => ({
            name: "",
            auth: false,
            id: ""
        }));
        window.localStorage.setItem("username", JSON.stringify(""));
        window.localStorage.setItem("id", JSON.stringify(""));
        window.localStorage.setItem("auth", JSON.stringify(false));
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

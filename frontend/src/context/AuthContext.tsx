"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import AuthService from "../services/auth.service";
import { User } from "../types";

interface AuthContextProps {
    user: User | null;
    checkUser: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    checkUser: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = () => {
        const currentUser = AuthService.getCurrentUser();
        setUser(currentUser);
    };

    const logout = () => {
        AuthService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, checkUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

import api from './api';
// import { LoginRequest, SignupRequest } from '../types/auth';

// Since I didn't create auth types file yet, let's define payload interfaces here or inline
interface LoginPayload {
    username: string;
    password: string;
}

const login = (data: LoginPayload) => {
    return api
        .post('/auth/signin', data)
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
};

export default AuthService;

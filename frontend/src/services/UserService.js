import ApiClient from './apiClient';

export default class UserService {
    static async fetchIdentity() {
        try {
            return await ApiClient.get('/user/identity');
        } catch (error) {
            return { authenticated: false };
        }
    }

    static async login(credentials) {
        try {
            return await ApiClient.post('/auth/login', credentials);
        } catch (error) {
            if (error.errors) {
                return Promise.reject(error);
            }
            return Promise.reject({ errors: { login: 'Authentication failed' } });
        }
    }

    static async logout() {
        try {
            return await ApiClient.post('/auth/logout');
        } catch (error) {
            return Promise.reject({ success: false });
        }
    }

    static async resetPassword(data) {
        try {
            return await ApiClient.post('/auth/reset-password', data);
        } catch (error) {
            if (error.errors) {
                return Promise.reject(error);
            }
            return Promise.reject({ errors: { email: 'Email not found!' } });
        }
    }

    static async register(userData) {
        try {
            return await ApiClient.post('/auth/register', userData);
        } catch (error) {
            if (error.errors) {
                return Promise.reject(error);
            }
            return Promise.reject({ errors: { email: 'Registration failed' } });
        }
    }
}
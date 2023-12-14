

import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const user = reactive({
        username: 'admin',
        password: '123',
        isAuthenticated: false,
        favorites: [] 
    });

const login = (username, password) => {
    if (username === user.username && password === user.password) {
        user.isAuthenticated = true;
    } else {
        throw new Error('Invalid username or password');
    }
    };

    const addToFavorites = (favorite) => {
        user.favorites.push(favorite);
    };

    return { user, login, addToFavorites };
});

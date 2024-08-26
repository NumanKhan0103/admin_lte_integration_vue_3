import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import About from '../view/About.vue';
import Users from '../view/Users.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user',
        name: 'Users',
        component: Users
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

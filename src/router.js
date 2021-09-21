import Vue from 'vue';
import VueRouter from 'vue-router'
import Index from './Page/Index'
import Login from './Page/Login'
import Register from './Page/Register'

Vue.use(VueRouter);

const routes = [
    {name: 'index', path: '/', component: Index},
    {name: 'login', path: '/login', component: Login},
    {name: 'register', path:'/register', component: Register}
];

const router = new VueRouter({
    mode: "history",
    routes,
})

export default router;

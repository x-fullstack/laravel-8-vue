import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    {path: '/', component: () => import('./components/ExampleComponent.vue')},
    {path: '/about', component: () => import('./components/FooComponent.vue')},
    {path: '/admin', component: () => import('./components/AdminAdmin.vue')},
];

const router = new createRouter({
    history: createWebHashHistory('/vue/'),
    routes: routes,
});


export default router

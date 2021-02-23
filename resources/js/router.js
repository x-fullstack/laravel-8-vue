import { createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    { path: '/', component: require('./components/ExampleComponent.vue').default },
    { path: '/about', component: require('./components/FooComponent.vue').default },
];

const router = new createRouter({
    history:  createWebHashHistory('/vue/'),
    routes: routes,
});


export default router

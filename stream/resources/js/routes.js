import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./components/Home').default
    },
    {
        path: '/about',
        component: require('./components/About').default
    },
    {
        path: '/contact',
        component: require('./components/Contact').default
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home').default
    },
    {
        path: '/tooltips',
        component: require('./views/Tooltip').default
    },
    {
        path: '/faq',
        component: require('./views/Faq').default
    },
    {
        path: '/contact',
        component: require('./views/Contact').default
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

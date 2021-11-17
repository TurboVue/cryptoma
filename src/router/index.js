import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../layouts/Index.vue'
import Main from '../views/Main.vue'
import Settings from '../views/Settings.vue'
import Upload from '../views/Upload.vue'
import store from '../store'

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
        children: [{
                path: '',
                name: 'Main',
                // route level code-splitting
                // this generates a separate chunk (Main.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Main,
                meta: { requiresAuth: true },
            }, {
                path: '/giftcard',
                name: 'Giftcard',
                // route level code-splitting
                // this generates a separate chunk (giftcard.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "Giftcard" */ '../views/Giftcard.vue'),
                    meta: { requiresAuth: true },
            }, {
                path: '/tradebitcoin',
                name: 'Bitcoin',
                // route level code-splitting
                // this generates a separate chunk (Bitcoin.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "Bitcoin" */ '../views/Bitcoin.vue'),
                    meta: { requiresAuth: true },
                children: [{
                    path: '',
                    name: 'Converter',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Converter.vue'),
                        meta: { requiresAuth: true },
                }, {
                    path: 'barcode',
                    name: 'Barcode',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Barcode.vue'),
                        meta: { requiresAuth: true },
                }, {
                    path: 'proof',
                    name: 'Proof',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Proof.vue'),
                        meta: { requiresAuth: true },
                }]
            }, {
                path: '/transactions',
                name: 'Transactions',
                // route level code-splitting
                // this generates a separate chunk (Transactions.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "Transactions" */ '../views/Transactions.vue'),
                    meta: { requiresAuth: true },
            },
            //{
            //     path: '/mobile',
            //     name: 'Mobile',
            //     // route level code-splitting
            //     // this generates a separate chunk (Mobile.[hash].js) for this route
            //     // which is lazy-loaded when the route is visited.
            //     component: () =>
            //         import ( /* webpackChunkName: "Mobile" */ '../views/Mobile.vue')
            // },
            {
                path: '/upload/:id',
                name: 'Upload',
                component: Upload,
                meta: { requiresAuth: true },
            },
            {
                path: '/settings',
                name: 'Settings',
                // route level code-splitting
                // this generates a separate chunk (Settings.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Settings,
                meta: { requiresAuth: true },
                children: [{
                    path: '',
                    name: 'Profile',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Profile.vue'),
                        meta: { requiresAuth: true },
                }, {
                    path: 'paymentdetails',
                    name: 'Payment',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Payment.vue'),
                        meta: { requiresAuth: true },
                }, {
                    path: 'security',
                    name: 'Security',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Security.vue'),
                        meta: { requiresAuth: true },
                }]
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ '../views/Login.vue')
    }, {
        path: '/createaccount',
        name: 'CreateAccount',
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ '../views/Signup.vue')
    }, {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ '../views/ForgotPassword.vue')
    }, {
        path: '/resetpassword',
        name: 'ResetPassword',
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ '../views/Reset.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,

})
router.beforeEach((to, from, next) => {

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters["auth/authenticated"]) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router
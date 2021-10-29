import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Overview.vue'
import Main from '../views/Main.vue'
import Settings from '../views/Settings.vue'
import Upload from '../views/Upload.vue'
const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [{
                path: '',
                name: 'Main',
                // route level code-splitting
                // this generates a separate chunk (Main.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Main
            }, {
                path: '/giftcard',
                name: 'Giftcard',
                // route level code-splitting
                // this generates a separate chunk (giftcard.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "Giftcard" */ '../views/Giftcard.vue')
            }, {
                path: '/tradebitcoin',
                name: 'Bitcoin',
                // route level code-splitting
                // this generates a separate chunk (Bitcoin.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "Bitcoin" */ '../views/Bitcoin.vue'),
                children: [{
                    path: '',
                    name: 'Converter',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Converter.vue')
                }, {
                    path: 'barcode',
                    name: 'Barcode',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Barcode.vue')
                }, {
                    path: 'proof',
                    name: 'Proof',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Proof.vue')
                }]
            }, {
                path: '/transactions',
                name: 'Transactions',
                // route level code-splitting
                // this generates a separate chunk (Transactions.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "Transactions" */ '../views/Transactions.vue')
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
            },
            {
                path: '/settings',
                name: 'Settings',
                // route level code-splitting
                // this generates a separate chunk (Settings.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Settings,
                children: [{
                    path: '',
                    name: 'Profile',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Profile.vue')
                }, {
                    path: 'paymentdetails',
                    name: 'Payment',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Payment.vue')
                }, {
                    path: 'security',
                    name: 'Security',
                    component: () =>
                        import ( /* webpackChunkName: "Transactions" */ '../views/Security.vue')
                }]
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
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
    history: createWebHashHistory(),
    routes,

})

export default router
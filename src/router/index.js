import { createRouter, createWebHistory } from "vue-router";
import Role from '@/services/role'
import UserDashboard from "../layouts/user/Index.vue";
import AdminDashboard from "../layouts/admin/Index.vue";
import Main from "../views/Main.vue";
import AdminCards from "../views/admin/Cards.vue";
import Category from "../views/admin/Category.vue";
import Giftcard from "../views/Giftcard.vue";
import Account from '../views/Account.vue'
import Settings from "../views/Settings.vue";
import Bitcoin from "../views/Bitcoin.vue";
import Upload from "../views/Upload.vue";
import Barcode from "../views/Barcode.vue";
import Transactions from "../views/Transactions.vue";
import Proof from "../views/Proof.vue";
import Converter from "../views/Converter.vue";
import store from "../store";

const routes = [{
        path: "/",
        name: "UserDashboard",
        component: UserDashboard,
        // meta: { requiresAuth: true },
        children: [{
                path: "",
                name: "Main",
                // route level code-splitting
                // this generates a separate chunk (Main.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Main,
                meta: { authorize: [Role.User, Role.Admin] },
            },
            {
                path: "/giftcard",
                name: "Giftcard",
                // route level code-splitting
                // this generates a separate chunk (giftcard.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Giftcard,
                meta: { authorize: [Role.User, Role.Admin] },
            },
            {
                path: "/tradebitcoin",
                name: "Bitcoin",
                // route level code-splitting
                // this generates a separate chunk (Bitcoin.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Bitcoin,
                meta: { authorize: [Role.User, Role.Admin] },
                children: [{
                        path: "",
                        name: "Converter",
                        component: Converter,
                        meta: { authorize: [Role.User, Role.Admin] },
                    },
                    {
                        path: "barcode",
                        name: "Barcode",
                        component: Barcode,
                        meta: { authorize: [Role.User, Role.Admin] },
                    },
                    {
                        path: "proof",
                        name: "Proof",
                        component: Proof,
                        meta: { authorize: [Role.User, Role.Admin] },
                    },
                ],
            },
            {
                path: "/transactions",
                name: "Transactions",
                // route level code-splitting
                // this generates a separate chunk (Transactions.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Transactions,
                meta: { authorize: [Role.User, Role.Admin] },
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
                path: "/upload/:id",
                name: "Upload",
                component: Upload,
                meta: { authorize: [Role.User, Role.Admin] },
            },
            {
                path: '/account-details',
                name: 'AccountDetails',
                component: Account,
                meta: { authorize: [Role.User, Role.Admin] },
            },
            {
                path: "/settings",
                name: "Settings",
                // route level code-splitting
                // this generates a separate chunk (Settings.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Settings,
                meta: { authorize: [Role.User, Role.Admin] },
                children: [{
                        path: "",
                        name: "Profile",
                        component: () =>
                            import (
                                /* webpackChunkName: "Transactions" */
                                "../views/Profile.vue"
                            ),
                        meta: { authorize: [Role.User, Role.Admin] },
                    },
                    {
                        path: "paymentdetails",
                        name: "Payment",
                        component: () =>
                            import (
                                /* webpackChunkName: "Transactions" */
                                "../views/Payment.vue"
                            ),
                        meta: { authorize: [Role.User, Role.Admin] },
                    },
                    {
                        path: "security",
                        name: "Security",
                        component: () =>
                            import (
                                /* webpackChunkName: "Transactions" */
                                "../views/Security.vue"
                            ),
                        meta: { authorize: [Role.User, Role.Admin] },
                    },
                ],
            },
        ],
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: AdminDashboard,
        // meta: { requiresAuth: true },
        children: [{
            path: '',
            name: 'AdminMain',
            component: () =>
                import ( /* webpackChunkName: "AdminMain" */ "../views/admin/Main.vue"),
            meta: { authorize: [Role.Admin] }
        }, {
            path: '/admin/cards',
            name: 'AdminCards',
            component: AdminCards,
            meta: { authorize: [Role.Admin] }
        }, {
            path: '/admin/category/:id',
            name: 'Category',
            component: Category,
            meta: { authorize: [Role.Admin] },
            children: [{
                path: '/admin/add-card',
                name: 'AddCard',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/admin/AddCard.vue'),
                meta: { authorize: [Role.Admin] }
            }, {
                path: '/admin/update/:id',
                name: 'UpdateCard',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/admin/UpdateCard.vue'),
                meta: { authorize: [Role.Admin] }
            }]
        }]
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ "../views/Login.vue"),
    }, {
        path: "/createaccount",
        name: "CreateAccount",
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ "../views/Signup.vue"),

    },
    {
        path: "/completeregistration/emailverification",
        name: "EmailVerification",
        query: { status: 'success' },
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ "../views/EmailVerification.vue"),
    },
    {
        path: "/forgotpassword",
        name: "ForgotPassword",
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ "../views/ForgotPassword.vue"),
    }, {
        path: "/resetpassword",
        name: "ResetPassword",
        // route level code-splitting
        // this generates a separate chunk (giftcard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Giftcard" */ "../views/Reset.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
});
router.beforeEach((to, from, next) => {
    const { authorize } = to.meta
    const isLoggedIn = store.getters['auth/authenticated']
    const userRole = store.getters['auth/user_role']
    if (authorize) {
        if (!isLoggedIn) {
            next("/login");
        }
        if (authorize.length && !authorize.includes(userRole)) {
            next("/");
        }
    }
    next();

});

export default router;
// export default router;
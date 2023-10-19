// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/LandingPage.vue"),
    children: [
      { path: "/", redirect: "/main-bucket-list" },
      {
        path: "/main-bucket-list",
        component: () => import("@/views/MainBucketList.vue"),
      },
      {
        path: "/main-transaction-list",
        component: () => import("@/views/MainTransactionList.vue"),
      },
      {
        path: "/main-account-list",
        component: () => import("@/views/MainAccountList.vue"),
      },
      {
        path: "/main-report-list",
        component: () => import("@/views/MainReportList.vue"),
      },
    ],
  },

  {
    path: "/new-income",
    component: () => import("@/views/NewIncome.vue"),
  },

  // {
  //   path: '/',
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

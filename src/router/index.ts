import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
                      path: "/index",
    name: "Layout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Layout/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

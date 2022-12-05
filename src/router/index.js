import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import process from "process";

const router = createRouter({
  history: createWebHashHistory(),
  publicPath: process.env.NODE_ENV === "production" ? "/bestodon-vue" : "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: (route) => ({
        page: route.query.page ? route.query.page : 1,
      }),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cat/:cat",
      name: "category",
      component: () => import("../views/HomeView.vue"),
      props: (route) => ({
        page: route.query.page ? route.query.page : 1,
      }),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
      props: (route) => ({
        query: route.query.q,
        page: route.query.page ? route.query.page : 1,
      }),
    },
  ],
});

export default router;

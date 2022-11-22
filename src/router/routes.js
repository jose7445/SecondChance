import CardDetail from "../pages/CardDetail.vue";

const routes = [
  {
    path: "/",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [{ path: "", component: () => import("src/pages/HomePage.vue") }],
  },
  {
    path: "/about",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      { path: "", component: () => import("src/pages/AboutPage.vue") },
    ],
  },
  {
    path: "/contact",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      { path: "", component: () => import("src/pages/ContactPage.vue") },
    ],
  },
  {
    path: "/adopt",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      { path: "", component: () => import("src/pages/AdoptPage.vue") },
    ],
  },
  {
    path: "/pets/:id",
    name: "pets",
    component: CardDetail,
  },

  {
    path: "/pets/:id",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      {
        path: "",
        name: "pets",
        component: () => import("src/pages/CardDetail.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

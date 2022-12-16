const routes = [
  {
    path: "/",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [{ path: "", component: () => import("src/pages/HomePage.vue") }],
  },
  {
    path: "/nosotros",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      { path: "", component: () => import("src/pages/AboutPage.vue") },
    ],
  },
  {
    path: "/contactar",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      { path: "", component: () => import("src/pages/ContactPage.vue") },
    ],
  },
  {
    path: "/adoptar",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      { path: "", component: () => import("src/pages/AdoptPage.vue") },
    ],
  },

  {
    path: "/adoptar/:id",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [
      {
        path: "",
        name: "adoptar",
        component: () => import("src/pages/CardDetail.vue"),
      },
    ],
  },

  {
    path: "/registrarse",
    component: () => import("src/layouts/Header&Footer.vue"),
    children: [{ path: "", component: () => import("src/pages/Register.vue") }],
  },

  {
    path: "/panelcontrol",
    component: () => import("src/layouts/PanelControl.vue"),
    children: [
      { path: "", component: () => import("src/pages/ControlPage.vue") },
    ],
  },
  {
    path: "/panelcontrol/perfil",
    component: () => import("src/layouts/PanelControl.vue"),
    children: [
      { path: "", component: () => import("src/pages/ProfilePage.vue") },
    ],
  },
  {
    path: "/panelcontrol/favoritos",
    component: () => import("src/layouts/PanelControl.vue"),
    children: [
      { path: "", component: () => import("src/pages/FavouritePets.vue") },
    ],
  },

  {
    path: "/panelcontrol/faq",
    component: () => import("src/layouts/PanelControl.vue"),
    children: [{ path: "", component: () => import("src/pages/FaqPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

  {
    path: "/mail",
    component: () => import("../layouts/Mail.vue"),
  },
];

export default routes;

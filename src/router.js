import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "./pages/Landing";
import Chronicles from "./pages/Chronicles";

const routes = [
  {
    path: "/",
    component: Landing,
    name: "home",
    meta: {
      background: "homeBg",
      title: "Adventurer - Home"
    }
  },
  {
    path: "/chronicles",
    component: Chronicles,
    name: "chronicles",
    meta: {
      background: "homeBg",
      title: "Adventurer - Chronicles"
    }
  }
];

const router = new VueRouter({
  routes
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  next();
});

Vue.use(VueRouter);

export default router;

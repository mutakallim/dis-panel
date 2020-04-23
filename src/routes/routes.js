import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Maps from "@/pages/Maps.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        component: Maps
      }
    ]
  }
];

export default routes;

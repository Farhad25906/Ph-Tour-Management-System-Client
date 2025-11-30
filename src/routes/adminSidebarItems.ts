
import AddDivision from "@/pages/Admin/AddDivision";
import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
import type { ISidebarItem } from "@/types";

import { lazy } from "react";

const Analytic = lazy(() => import("@/pages/Admin/Analytic"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytic,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
      {
        title: "Add Division",
        url: "/admin/add-division",
        component: AddDivision,
      },
    ],
  },
];
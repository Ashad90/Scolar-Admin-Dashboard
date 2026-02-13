import { createBrowserRouter } from "react-router";
import Login from "./pages/auth/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Students from "./pages/dashboard/Students";
import Teachers from "./pages/dashboard/Teachers";
import CreateContent from "./pages/dashboard/CreateContent";
import Parents from "./pages/dashboard/Parents";
import Library from "./pages/dashboard/Library";
import Classes from "./pages/dashboard/Classes";
import Subjects from "./pages/dashboard/Subjects";
import Schedule from "./pages/dashboard/Schedule";
import Attendance from "./pages/dashboard/Attendance";
import Finance from "./pages/dashboard/Finance";
import Validations from "./pages/dashboard/Validations";
import Help from "./pages/dashboard/Help";
import Settings from "./pages/dashboard/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "students", Component: Students },
      { path: "teachers", Component: Teachers },
      { path: "create-content", Component: CreateContent },
      { path: "parents", Component: Parents },
      { path: "library", Component: Library },
      { path: "classes", Component: Classes },
      { path: "subjects", Component: Subjects },
      { path: "schedule", Component: Schedule },
      { path: "attendance", Component: Attendance },
      { path: "finance", Component: Finance },
      { path: "validations", Component: Validations },
      { path: "help", Component: Help },
      { path: "settings", Component: Settings },
    ],
  },
]);

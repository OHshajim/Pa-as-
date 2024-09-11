import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRoute from "./PrivetRoute";
import MoneyTransfer from "../Pages/MoneyTransfer";
import AdminLayout from "../Layout/AdminLayout";
import AgentDashBoard from "../Pages/Agent/AgentDashBoard";
import AgentLayout from "../Layout/AgentLayout";
import Overview from "../Pages/Admin/Overview";

const Routes = createBrowserRouter([
  // Admin
  {
    path: "Admin",
    element: <AdminLayout />,
    children: [
      {
        path: "OverView",
        element: <Overview />,
      },
    ],
  },

  // Agent
  {
    path: "Agent",
    element: <AgentLayout />,
    children: [
      {
        path: "",
        element: <AgentDashBoard />,
      },
    ],
  },

  // General Users
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        ),
      },
      {
        path: "/sendmoney",
        element: (
          <PrivetRoute>
            <MoneyTransfer />
          </PrivetRoute>
        ),
      },
      {
        path: "/cashOut",
        element: (
          <PrivetRoute>
            <MoneyTransfer />
          </PrivetRoute>
        ),
      },
      {
        path: "/addMoney",
        element: (
          <PrivetRoute>
            <MoneyTransfer />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;

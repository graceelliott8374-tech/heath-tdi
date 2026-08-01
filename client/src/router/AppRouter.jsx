import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import ManagedIT from "../pages/Services/ManagedIT/ManagedIT";
import StructuredCabling from "../pages/Services/StructuredCabling/StructuredCabling";
import FiberOptics from "../pages/Services/FiberOptics/FiberOptics";
import VoIP from "../pages/Services/VoIP/VoIP";
import Cybersecurity from "../pages/Services/Cybersecurity/Cybersecurity";
import CloudSolutions from "../pages/Services/CloudSolutions/CloudSolutions";
import Industries from "../pages/Industries/Industries";
import Contact from "../pages/Contact/Contact";
import Support from "../pages/Support/Support";

// Admin Pages
import Admin from "../pages/Admin/Admin";

// Error Pages
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  // ==========================
  // Public Website
  // ==========================
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: "managed-it",
            element: <ManagedIT />,
          },
          {
            path: "structured-cabling",
            element: <StructuredCabling />,
          },
          {
            path: "fiber-optics",
            element: <FiberOptics />,
          },
          {
            path: "voip",
            element: <VoIP />,
          },
          {
            path: "cybersecurity",
            element: <Cybersecurity />,
          },
          {
            path: "cloud-solutions",
            element: <CloudSolutions />,
          },
        ],
      },
      {
        path: "industries",
        element: <Industries />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },

  // ==========================
  // Admin Portal
  // ==========================
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <NotFound />,
  },
]);

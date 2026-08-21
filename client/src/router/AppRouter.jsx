import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import ManagedIT from "../pages/Services/ManagedIT/ManagedIT";
import NetworkSolutions from "../pages/Services/NetworkSolutions/NetworkSolutions";
import WiFiWireless from "../pages/Services/WiFiWireless/WiFiWireless";
import StructuredCabling from "../pages/Services/StructuredCabling/StructuredCabling";
import FiberOptics from "../pages/Services/FiberOptics/FiberOptics";
import VoIP from "../pages/Services/VoIP/VoIP";
import SecuritySurveillance from "../pages/Services/SecuritySurveillance/SecuritySurveillance";
import Cybersecurity from "../pages/Services/Cybersecurity/Cybersecurity";
import CloudSolutions from "../pages/Services/CloudSolutions/CloudSolutions";
import WhoWeServe from "../pages/WhoWeServe/WhoWeServe";
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
      },
      {
        path: "services/managed-it",
        element: <ManagedIT />,
      },
      {
        path: "services/network-solutions",
        element: <NetworkSolutions />,
      },
      {
        path: "services/wifi-wireless",
        element: <WiFiWireless />,
      },
      {
        path: "services/structured-cabling",
        element: <StructuredCabling />,
      },
      {
        path: "services/fiber-optics",
        element: <FiberOptics />,
      },
      {
        path: "services/voip",
        element: <VoIP />,
      },
      {
        path: "services/security-surveillance",
        element: <SecuritySurveillance />,
      },
      {
        path: "services/cybersecurity",
        element: <Cybersecurity />,
      },
      {
        path: "services/cloud-solutions",
        element: <CloudSolutions />,
      },
      {
        path: "whoweserve",
        element: <WhoWeServe />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "*",
        element: <NotFound />,
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

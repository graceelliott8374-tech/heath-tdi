import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <main className="layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;

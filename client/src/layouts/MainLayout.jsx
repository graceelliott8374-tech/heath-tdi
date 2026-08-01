import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
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

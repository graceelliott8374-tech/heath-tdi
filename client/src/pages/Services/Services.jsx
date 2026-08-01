import "./Services.css";
import { Outlet } from "react-router-dom";

function Services() {
  return (
    <main className="services-page">
      <div className="container">
        <h1>Our Services</h1>
      </div>

      <Outlet />
    </main>
  );
}

export default Services;

import "./ServicesOverview.css";
import { services } from "../../pages/Home/serviceData";
import { NavLink } from "react-router-dom";

function ServicesOverview() {
  return (
    <section className="services-overview">
      <div className="container">
        <h2>Our Services</h2>

        <div className="services-overview__grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <NavLink
                key={service.title}
                to={service.path}
                className="services-overview__card"
              >
                <Icon
                  className="services-overview__icon"
                  size={48}
                  weight="duotone"
                />

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}



export default ServicesOverview;

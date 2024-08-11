import { serviceList } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {serviceList.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;

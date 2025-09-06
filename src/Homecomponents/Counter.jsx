import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const counters = [
  { icon: "fa-regular fa-heart", value: 34700, label: "Satisfied Clients" },
  { icon: "fa-solid fa-hands-praying", value: 15754, label: "Finished Works" },
  { icon: "fa-solid fa-clock-rotate-left", value: 15, label: "Years of Service" },
  { icon: "fa-solid fa-globe", value: 95, label: "Global Brands" },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // 30% visible triggers animation
  });

  return (
    <div className="counter-area pb-70" ref={ref}>
      <div className="container">
        <div className="counter-bg pt-100">
          <div className="row">
            {counters.map(({ icon, value, label }, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper text-center mb-30">
                  <div className="counter-icon">
                    <i className={icon}></i>
                  </div>
                  <div className="counter-text">
                    <h2 className="counter">
                      {inView ? <CountUp end={value} duration={2} /> : 0}
                    </h2>
                    <span>{label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;

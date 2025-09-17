"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const countersData = [
  {
    id: 1,
    icon: "/experience.svg",
    value: 15,
    title: "Years of Experience",
  },
  {
    id: 2,
    icon: "/client.svg",
    value: 3988,
    title: "Happy Clients",
  },
  {
    id: 3,
    icon: "/order.svg",
    value: 170,
    title: "Orders Daily",
  },
  {
    id: 4,
    icon: "/features.svg",
    value: 9264,
    title: "Varieties Of Products",
  },
];

export default function Counters() {
  const [counts, setCounts] = useState(
    countersData.map((item) => ({ id: item.id, value: 0 }))
  );

  useEffect(() => {
    countersData.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000; // 2s animation
      const incrementTime = 20;

      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) =>
          prev.map((c) => (c.id === counter.id ? { ...c, value: start } : c))
        );
      }, incrementTime);
    });
  }, []);

  return (
    <div className="mad-section">
      <div className="mad-counters">
        {countersData.map((item) => (
          <div key={item.id} className="mad-col">
            <div className="mad-counter">
              <div className="mad-counter-inner">
                <div className="mad-counter-icon">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="mad-counter-content">
                  <div className="mad-counter-count">
                    {counts.find((c) => c.id === item.id)?.value}
                  </div>
                  <div className="mad-counter-title">{item.title}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

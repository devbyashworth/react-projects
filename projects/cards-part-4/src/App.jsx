import React, { useState, useMemo } from "react";
import Dropdown from "./Dropdown";

const days = ["today", "yesterday"];

const data = [
  {
    name: "today",
    values: [
      { name: "Protein", value: 180, energy: 420 },
      { name: "Fat", value: 90, energy: 350 },
      { name: "Carbs", value: 120, energy: 210 },
    ],
  },
  {
    name: "yesterday",
    values: [
      { name: "Protein", value: 380, energy: 120 },
      { name: "Fat", value: 290, energy: 620 },
      { name: "Carbs", value: 220, energy: 330 },
    ],
  },
];

const App = () => {
  const [day, setDay] = useState("today");

  const activeData = data.find((d) => d.name === day);

  // 🔥 Auto-scale calculation
  const maxValue = useMemo(() => {
    return Math.max(...activeData.values.map((v) => v.value));
  }, [activeData]);

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h2>Nutrition Overview</h2>
          <Dropdown items={days} selectedItem={day} onSelect={setDay} />
        </div>

        <div className="chart">
          <div className="y-axis">
            {[100, 75, 50, 25, 0].map((percent) => (
              <label key={percent}>
                {Math.round((maxValue * percent) / 100)}
              </label>
            ))}
          </div>

          <div className="bars">
            {activeData.values.map((item) => {
              const heightPercent = (item.value / maxValue) * 100;

              return (
                <div className="bar-wrapper" key={item.name}>
                  <div className="bar" style={{ height: `${heightPercent}%` }}>
                    <div className="tooltip">
                      <h3>Energy</h3>
                      <var>{item.energy} kcal</var>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="x-axis">
          {activeData.values.map((item) => (
            <label key={item.name}>{item.name}</label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

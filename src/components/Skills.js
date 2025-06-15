// src/components/SkillsSection.js
import React from "react";
import Pungulu from "./pungulu";       // ensure correct import path
import SkillsChart from "./SkillsChart"; // ensure correct import path

export default function Skills() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem",
        backgroundColor: "#111",
      }}
    >
      <div style={{ flex: "1 1 400px", minWidth: "320px", maxWidth: "600px" }}>
        <Pungulu />
      </div>
      <div style={{ flex: "1 1 400px", minWidth: "320px", maxWidth: "600px" }}>
        <SkillsChart />
      </div>
    </div>
  );
}

import React from "react";
import "./ClassCard.css";

export default function ClassCard({ title, teacher, cover }) {
  return (
    <div className="class-card">
      <img src={cover} alt={title} className="class-cover" />
      <div className="class-info">
        <h3>{title}</h3>
        <p>{teacher}</p>
      </div>
      <div className="class-actions">
        <button>View</button>
        <button>Assignments</button>
      </div>
    </div>
  );
}

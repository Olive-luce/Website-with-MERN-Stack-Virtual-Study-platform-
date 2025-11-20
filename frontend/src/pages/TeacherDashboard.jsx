import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ClassCard from "../components/ClassCard/ClassCard";
import "./TeacherDashboard.css";

const sampleTeacherClasses = [
  {
    id: 1,
    title: "Software Engineering",
    students: 45,
    cover: "/header1.png",
  },
  {
    id: 2,
    title: "Database Management Systems",
    students: 39,
    cover: "/infobg1.jpg",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    students: 42,
    cover: "/cardpic3.jpg",
  },
];

export default function TeacherDashboard() {
  useEffect(() => {
    console.log("TeacherDashboard mounted");
  }, []);

  return (
    <div className="teacher-dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Your Classes</h2>
          <button className="create-class-btn">+ Create Class</button>
        </div>

        <div className="class-grid">
          {sampleTeacherClasses.map((cls) => (
            <ClassCard key={cls.id} {...cls} />
          ))}
        </div>
      </div>
    </div>
  );
}

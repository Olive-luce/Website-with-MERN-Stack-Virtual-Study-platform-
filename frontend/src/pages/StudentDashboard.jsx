import React, { useEffect } from "react";
import ClassCard from "../components/ClassCard/ClassCard";
import Sidebar from "../components/Sidebar/Sidebar";
import "./StudentDashboard.css";

const sampleClasses = [
  {
    id: 1,
    title: "Introduction to Databases",
    teacher: "Mr. Rahman",
    cover: "/header1.png",
  },
  {
    id: 2,
    title: "Web Development Basics",
    teacher: "Ms. Khan",
    cover: "/infobg1.jpg",
  },
  {
    id: 3,
    title: "Computer Networks",
    teacher: "Dr. Alam",
    cover: "/cardpic3.jpg",
  },
];

export default function StudentDashboard() {
  useEffect(() => {
    console.log('StudentDashboard mounted')
  }, [])

  return (
    <div className="student-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        {/* Top header section */}
        <div className="dashboard-header">
          <h2>Your Classes</h2>
          <button className="join-class-btn">+ Join Class</button>
        </div>

        {/* Class cards grid */}
        <div className="class-grid">
          {sampleClasses.map((cls) => (
            <ClassCard key={cls.id} {...cls} />
          ))}
        </div>
      </div>
    </div>
  );
}

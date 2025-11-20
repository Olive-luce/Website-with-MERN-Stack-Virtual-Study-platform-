import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  Calendar,
  ClipboardList,
  Library,
  Settings,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef(null);

  // Temporary demo values — replace with real data later:
  const classesCount = 3; // number of classes joined
  const assignmentsDue = 5; // number of assignments due soon

  // Close calendar popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate days of the current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" });
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className="sidebar-menu">
        {/* CLASSES */}
        <li>
          <Home size={20} />
          {isOpen && (
            <>
              <span>Classes</span>
              <span className="badge">{classesCount}</span>
            </>
          )}
        </li>

        {/* CALENDAR */}
        <li
          className="calendar-item"
          onClick={() => setShowCalendar(!showCalendar)}
          ref={calendarRef}
        >
          <Calendar size={20} />
          {isOpen && <span>Calendar</span>}

          {showCalendar && (
            <div className="calendar-popup">
              <div className="calendar-header">
                <span>
                  {month} {year}
                </span>
                <X
                  size={16}
                  className="close-icon"
                  onClick={() => setShowCalendar(false)}
                />
              </div>
              <div className="calendar-grid">
                {days.map((day) => (
                  <div
                    key={day}
                    className={`calendar-day ${
                      day === today.getDate() ? "today" : ""
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>

        {/* ASSIGNMENTS */}
        <li>
          <ClipboardList size={20} />
          {isOpen && (
            <>
              <span>Assignments</span>
              <span className="badge">{assignmentsDue}</span>
            </>
          )}
        </li>

        {/* LIBRARY */}
        <li>
          <a
            href="https://books.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            <Library size={20} />
            {isOpen && <span>Library</span>}
          </a>
        </li>

        {/* LOG OUT */}
        <li className="settings-container">
          <Link to="/SignIn" className="sidebar-link">
            <Settings size={20} />
            {isOpen && <span>Log Out</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

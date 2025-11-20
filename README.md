# Website-with-MERN-Stack-Virtual-Study-platform-
This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js)

This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). Its main goal is to provide a functional authentication system with role-based access, allowing users to sign in as either a Student or a Teacher. The frontend, developed with React, includes pages such as the Sign-In screen and dashboards tailored to the user's role. The backend uses Node.js and Express to manage API requests, authenticate users, encrypt passwords, and interact with a MongoDB database using Mongoose. The system uses JWT for secure login sessions, bcrypt for password hashing, and environment variables for configuration.

To accomplish all of this, the project relies on several key technologies:

Frontend: React.js, React Router, Axios, and custom CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Additional tools: bcrypt, JWT, dotenv

The project implements several important features that make the system secure and scalable. These include:

User Authentication: secure login with encrypted passwords and JWT-based sessions

Role-Based Access Control: separating functionality for Students and Teachers

User Management: storing user profiles, verifying logins, and handling errors smoothly

The application is organized into a clean directory structure to keep the project maintainable. Its layout looks like this:

backend/ contains server.js, database configuration, models, routes, controllers, and middleware

frontend/ contains all React pages, components, styles, and configurations

project root includes documentation and overall project setup files

In operation, the system follows a simple flow:

Users sign in on the React interface

Backend validates credentials and generates a token

Frontend stores the token and loads the user interface

Role-based dashboards display content depending on whether the user is a Student or a Teacher

This project can easily be expanded into a full classroom or learning management platform. Some natural extensions include:

Teacher tools for managing students or classes

Course creation features

File submission systems

Attendance or grading modules

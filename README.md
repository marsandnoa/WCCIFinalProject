# WCCIFinalProject

WCCIFinalProject is a web application that allows users to sign up, register, and manage aquariums. The application is built using Spring Boot for the backend, React for the frontend, and utilizes Docker for containerization. MySQL is used as the database, and Tailwind CSS is used for styling.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following prerequisites installed on your system:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js and npm](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- IDE of your choice (e.g., IntelliJ IDEA, Visual Studio Code)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/marsandnoa/WCCIFinalProject.git
   cd WCCIFinalProject
Build the Docker image for the MySQL database:

cd Backend
docker compose up

Install frontend dependencies and start the React development server:

bash
Copy code
cd frontend
npm install
npm start
The application is now running. Access the frontend at http://localhost:3000.

Usage
The application allows users to sign up, register aquariums, and verify their validity. Users can manage their aquariums and check if they meet certain criteria for validity.

Technologies Used
Spring Boot: Backend framework for Java-based applications.
React: JavaScript library for building user interfaces.
MySQL: Relational database management system.
Docker: Containerization platform for packaging, distributing, and running applications.
Tailwind CSS: Utility-first CSS framework for styling the frontend.

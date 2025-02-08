# Contactly

## Overview
**Contactly** is a  contact management system that allows users to securely store, manage, and retrieve contact information. It features **user authentication**, **JWT-based authorization**, and **CRUD operations** for contacts. The backend is built with **Node.js, Express, and MongoDB**, providing a scalable and efficient solution.

## Features
- Secure user authentication with **JWT authorization**
- **Create, Read, Update, Delete (CRUD)** functionality for contacts
- RESTful API for seamless integration
- Middleware-based authorization for enhanced security
- Optimized database handling with **MongoDB** and **Mongoose**

## Requirements
To run this project, ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** (package manager)
- **nodemon** for automatic server restarts during development
- **express** for backend routing and API handling
- **bcrypt** for password hashing and security
- **jsonwebtoken** for authentication and secure API access

### Install Required Packages
Run the following command to install all required dependencies:
```sh
npm install express bcrypt jsonwebtoken nodemon mongoose dotenv express-async-handler cors
```

## Installation
1. **Clone the repository:**
   ```sh
   https://github.com/SanyamWadhwa07/Contactly.git
   cd contactly
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:** Create a `.env` file in the root directory and add:
   ```env
   ACCESS_TOKEN_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string
   PORT=at port at which you want to run
   ```
4. **Run the server:**
   ```sh
   npm start
   ```
   Or if using **nodemon**:
   ```sh
   npm run dev
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Authenticate user and get token |
| GET | `/api/contacts` | Get all contacts (authenticated) |
| POST | `/api/contacts` | Add a new contact |
| PUT | `/api/contacts/:id` | Update an existing contact |
| DELETE | `/api/contacts/:id` | Delete a contact |

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Middleware:** Express-Async-Handler, dotenv

## Future Enhancements
- Implement frontend with **React** for a full-stack experience
- Add **OAuth authentication** (Google, Facebook login)
- Implement **role-based access control** (RBAC)

## License
This project is licensed under the **MIT License**.



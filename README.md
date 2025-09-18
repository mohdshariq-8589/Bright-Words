# BrightWords

BrightWords is a full-stack blog application built with the **MERN stack**, providing a modern, responsive platform for creating and sharing blog posts. The frontend is developed with **React.js**, styled using **Tailwind CSS** and **Flowbite React**, while the backend uses **Express.js** and **MongoDB** for robust data management.
Authentication is secured with **JSON Web Tokens (JWT)** and cookies for safe, persistent sessions.

👉 **Live Demo:** [https://brightwords.onrender.com](https://brightwords.onrender.com) *(replace with your actual link)*

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running-the-Application](#running-the-application)
- [Contributing](#contributing)

## Features
- **Secure User Authentication**
  - JWT + cookies for login, registration, and protected routes.
- **Modern Responsive UI**
  - Tailwind CSS and Flowbite React components for a clean, mobile-friendly interface.
- **Rich Blog Management**
  - Create, edit, and delete posts through an intuitive editor.
- **Efficient Data Handling**
  - MongoDB ensures fast, scalable storage for users and posts.
- **Strong Security Practices**
  - Session protection and input validation keep data safe.

## Prerequisites
Make sure you have the following installed:
- **Node.js** v14 or later
- **MongoDB** (local instance or MongoDB Atlas)

## Installation
Clone the repository and navigate to it:
```bash
git clone https://github.com/<your-username>/brightwords.git
cd brightwords
```

Install dependencies for root and client:
```bash
npm install
cd client
npm install
```

Create a `.env` file in the `api` (server) directory:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

## Running the Application
**Backend:**
```bash
npm start
```

**Frontend:**
```bash
cd client
npm start
```

Open your browser at **http://localhost:5173** to view BrightWords.

## Contributing
Contributions are welcome!
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

Please ensure your code follows the project’s style and passes all checks.

**License:** MIT *(update if different)*

> ✨ *BrightWords — Share your thoughts with a brighter audience.*

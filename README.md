# 🔐 JWT-AUTH – Simple JWT Authentication (Node.js + Express)
A basic Node.js app using **Express** and **JWT** for authentication.  
It uses a hardcoded list of users and generates a JWT token upon successful login. A simple frontend is included to interact with the backend API.
---
## 📦 Features

- Hardcoded user list (no database)
- Login endpoint to generate JWT token
- Protected route that requires a valid token
- Basic frontend (HTML + JS) to test the API
---
## 🚀 Getting Started

### 1. Clone the repository

```bash

git clone https://github.com/amankharwar575/JWT-AUTH.git
cd JWT-AUTH
JWT-AUTH/
│
├── auth.js             # Main backend server using Express
├── package.json        # Project metadata and dependencies
│
├── public/             # Frontend folder
│   ├── index.html      # Basic login interface
│   └── script.js       # JavaScript to make API calls



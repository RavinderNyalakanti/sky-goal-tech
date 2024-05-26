# Authentication API with Express and MongoDB

## Overview
This project is a simple authentication API built using Express.js and MongoDB. It includes functionalities for user signup, login, and retrieval of user details. The API uses JWT tokens for authentication and includes protected routes.

## Features
- User Signup
- User Login
- Protected routes using JWT
- Fetching user details

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js
- dotenv
- cors

## Installation

1. Clone the repository:
   ```sh
   git clone <your-repository-url>
   cd <your-repository-name>

## Endpoints

### 1. Signup User

- **URL**: `POST /signup`
- **Description**: Creates a new user account.
- **Request Body**:
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "password": "yourpassword"
  }


# Signup user
curl -X POST -H "Content-Type: application/json" -d '{"name":"Your Name","email":"your.email@example.com","password":"yourpassword"}' https://sky-goal-tech.onrender.com/api/auth/signup

# Login user
curl -X POST -H "Content-Type: application/json" -d '{"email":"your.email@example.com","password":"yourpassword"}' https://sky-goal-tech.onrender.com/api/auth/login -i

# Get user details (replace <your_jwt_token> with the actual JWT token)
curl -X GET -H "Authorization: Bearer <your_jwt_token>" https://sky-goal-tech.onrender.com/api/auth/user -i

Make sure to replace `<your_jwt_token>` in the cURL examples with the actual JWT token received from the login/signup endpoints. Also, replace `link_to_postman_collection` with the actual link to your Postman collection if available.
# LMS-system (restful-api-database-integration 📟)

## Overview 🎬

This project is a simple Node.js API built using Express and MongoDB. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a user and course collections stored in a MongoDB database in its compass. The API interacts with a Mongoose model to manage course data, including fields such as id, title, description, and teacher also id, name, email, password for user data.

## Features 🎯

- **Create User**: Add a new user to the database.
- **Read Users**: Fetch a list of all users or retrieve a specific user or course by ID.
- **Update User**: Modify user and course information.
- **Delete User**: Remove a user and course from the database.

## Technologies 📢

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **MongoDB Atlas**: A NoSQL database used to store the user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## DEMO 📺
[Deployment Link]()

## Installation and Setup 🔌

   ```bash
   clone the repo by (git clone https://github.com/sodabarauf/LMS-system.git\)
   change directory by (cd restful-API-integrate-DB)
   install dependencies by (npm install)
   run server by (node index.js)
   ```
## setup mongobd

-Create a MongoDB cluster and get the connection string.
-Replace the MongoDB connection URL in the dbUrl variable in the index.js file:
-const dbUrl = 'your-mongodb-connection-url';
-Start the server:
-The server will run at http://localhost:3001.




## API Endpoints
### 1. Get all user or course 👧
- Endpoint: /users or courses/
- Method: GET
- Description: Fetches all users or courses from the database.

```bash
curl http://localhost:3001/users or courses

```
### 2. Get a user or course by ID 👧
- Endpoint: /users or courses/:id
- Method: GET
- Description: Fetches a user or course by their ID.

```bash
curl http://localhost:3001/users or courses/{id}

```

### 3. Create a new user or course 👨‍🦰
- Endpoint: /users or courses
- Method: POST
- Description: Creates a new user or course with the provided data.

```bash
curl -X POST http://localhost:3001/users or courses -H "Content-Type: application/json" -d '{"name":"John Doe", "email":john12@gmail.com, "password":123456789}'

```
### 4. Update a user or course by ID 🤦‍♂️
- Endpoint: /users or courses/:id
- Method: PUT
- Description: Updates an existing user's or course's data.

```bash
curl -X PUT http://localhost:3001/users or courses/{id} -H "Content-Type: application/json" -d '{"name":"jan"}'

```
### 5. Delete a user or course by ID 🧨
- Endpoint: /users or courses/:id
- Method: DELETE
- Description: Deletes a user or course from the database by their ID.

```bash
curl -X DELETE http://localhost:3001/users or courses/{id}
```
## Project Structure 📝
```bash
/node-api-project
│
├── /model
│   └── course.js         #mongoose schema for the course
│   └── user.js           # Mongoose schema for the User
│
├── .gitignore               # Git ignore file (to exclude node_modules and .env)
├── package.json             # Dependencies and project metadata
├── index.js                # Main index file
└── README.md                # Project documentation (optional)
```

## Author 👩‍💼
Sodaba✨Rauf✨
- Github: [https://github.com/sodabarauf]✔
- LinkedIn: [https://www.linkedin.com/in/sodaba-r-5a0733255/]✔
- Email: [sodabarauf4@gmail.com]✔

## Contributing 🤝
🎇 by using this link you can share your opinion : [https://github.com/sodabarauf/LMS-system.git]


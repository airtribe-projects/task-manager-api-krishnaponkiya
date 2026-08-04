# Task Manager REST API

## Overview

This project is a simple **Task Manager REST API** built with **Node.js** and **Express.js**. It demonstrates the fundamentals of building RESTful web services by implementing complete **CRUD (Create, Read, Update, Delete)** operations using in-memory data storage.

The primary goal of this project is to understand how an Express application is structured, how HTTP requests are processed, and how to organize backend code using routes, controllers, and middleware. It also introduces essential backend concepts such as request validation, error handling, logging, and filtering.

Although the application stores data in memory (without a database), it follows a modular architecture that can easily be extended to use databases like MongoDB or PostgreSQL in the future.

## Features

* Create a new task
* Retrieve all tasks
* Retrieve a task by its ID
* Update an existing task
* Delete a task
* Request validation using custom middleware
* Global request logging
* Proper HTTP status codes
* JSON-based API responses
* In-memory data storage
* RESTful API design

## Tech Stack

* Node.js
* Express.js
* JavaScript (ES6+)

## Project Structure

```text
task-manager/
│
├── app.js
├── package.json
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── middleware/
│   ├── logger.js
│   └── validateTask.js
│
└── data/
    └── tasks.js
```

## Learning Objectives

By completing this project, you will gain practical experience with:

* Express.js application setup
* REST API design principles
* HTTP methods and status codes
* Express routing
* Middleware implementation
* Controller-based architecture
* CRUD operations
* Input validation
* Error handling
* Request logging
* Testing APIs using Postman or cURL

This project serves as a strong foundation for building larger backend applications and can be easily enhanced by integrating a database, authentication, pagination, search, and other production-ready features.

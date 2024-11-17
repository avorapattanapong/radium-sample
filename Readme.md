# Radium Interview Assignment - User Management System

## Description
This is a simple user management system that allows CRUD operations on users. The backend API is built using Springboot 3 framework and Java 17. 
Database is an in-memory H2 database. The frontend is built using ReactJS.

## Features
- Add a user
- Update a user
- Delete a user
- View all users
- Search for a user by id

## Things to note
1. Even though the project is setup using h2 in-memory database, the database type can easily be converted to persistent database like MySQL or PostgreSQL by changing the configurations in `application.properties` file.
2. UserService is built with dependency injection in mind. This allows the API to easily switch to a different implementation, such as serverless functions like Firebase or AWS Lambda.
3. Database driver is setup to reduce boilerplate code using Hibernate.
4. Lombok is also configured in order to reduce boilerplate code.

## Assumptions
1. Name is not unique.
2. No authentication is required to access the API.
3. No authorization is required to access the API.

## How to run the project

## Things To Improve
1. There are multiple places that can be factored out to reduce code duplication
2. Exceptions can be factored out to a more generic type instead of Users related exceptions
3. Handle unique constraints in the database, current setup does not have any unique fields other than id
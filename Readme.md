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
5. Update user modal is not quite complete, the original value doesn't show up in the input fields and both values must be filled in for update to work.

## Assumptions
1. Name is not unique.
2. No authentication is required to access the API.
3. No authorization is required to access the API.

## How to run the project
1. Clone the repository
2. In the root directory, run `docker-compose up --build -d` to build and run the docker container
3. Go to `http://localhost:3000` to access the frontend
4. Note that due to some performance issues, the page might need to be refreshed a few times to load ui-library

## Things To Improve
1. There are multiple places that can be factored out to reduce code duplication
2. Exceptions can be factored out to a more generic type instead of Users related exceptions
3. Handle unique constraints in the database, current setup does not have any unique fields other than id
4. Add unit tests to both frontend and backend
5. React app dockerfile is not production-ready, it is currently setup to run in dev environment
6. Performance may not be up to par
7. React app is created in Nextjs, which I do not have much experience with. With more time, I could optimize the setup and improve the performance, utilizing Nextjs.
8. UI can be cleaned up a little more.
9. Error handling on the UI is missing.
10. The UI doesn't have a way to test retrieving a user by id. Accessible through `GET http://localhost:8081/users/{id}`
11. Linting should be configured to help maintain code formatting
12. Add user modal should use a date picker for birthdate field.
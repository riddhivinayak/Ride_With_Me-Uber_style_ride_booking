# User Registration Endpoint

## Endpoint

POST /register

## Description

This endpoint allows users to register a new account by providing their full name, email, and password.

## Required Data

The request body must be in JSON format and include the following fields:

- `fullName`: An object containing:
  - `firstname`: String, at least 3 characters
  - `lastname`: String, at least 2 characters
- `email`: String, valid email address
- `password`: String, at least 6 characters

## Status Codes

- 201: User registered successfully
- 400: Validation errors (e.g., invalid email, short password, etc.)

## Example Responses

### Success (201)

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "jwt_token_here"
}
```

### Validation Error (400)

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

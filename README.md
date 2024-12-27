# Book Management API

This project provides a simple API for managing books in a MongoDB database. It allows users to perform CRUD (Create, Read, and Delete) operations on books, including retrieving all books, adding new books, and deleting books by their unique ID.

## Features

- **GET `/books`**: Retrieve all books from the database.
- **POST `/books`**: Add a new book to the database.
- **DELETE `/books/:id`**: Delete a book by its unique ID.

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend server.
- **Express**: Web framework for Node.js to create API endpoints.
- **MongoDB**: NoSQL database used for storing books.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to define the `Book` model and interact with the database.
- **Body-Parser**: Middleware for parsing JSON request bodies.

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the repository (if applicable):

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install dependencies:

Make sure you have **Node.js** installed. Then, run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set up MongoDB:

Ensure you have a MongoDB instance running or use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Replace the `mongoose.connect` URL with your own connection string, or keep the existing one if you're using the provided MongoDB Atlas link.

### 4. Start the server:

Run the following command to start the server:

```bash
node app.js
```

The API will be available on `http://localhost:8081`.

## API Endpoints

### 1. **GET `/books`**

Retrieve all books from the database.

**Response:**

- **Status Code**: `200 OK`
- **Body**: A JSON array of books, where each book contains `id`, `name`, and `title`.

Example:

```json
[
  {
    "id": 1,
    "name": "Book One",
    "title": "The First Book"
  },
  {
    "id": 2,
    "name": "Book Two",
    "title": "The Second Book"
  }
]
```

### 2. **POST `/books`**

Add a new book to the database. The request body must contain the `name`, `id`, and `title` of the book.

**Request Body:**

```json
{
  "name": "Book Title",
  "id": 1,
  "title": "The Book's Title"
}
```

**Response:**

- **Status Code**: `200 OK`
- **Body**: The newly created book object, including the `id`, `name`, and `title`.

Example:

```json
{
  "id": 1,
  "name": "Book Title",
  "title": "The Book's Title"
}
```

### 3. **DELETE `/books/:id`**

Delete a book by its `id`. The `id` is passed as a URL parameter.

**Example Request:**

```
DELETE /books/1
```

**Response:**

- **Status Code**: `200 OK`
- **Body**: A JSON object with the result of the delete operation, including the count of deleted documents.

Example:

```json
{
  "deletedCount": 1
}
```

## Environment Variables

Ensure that you replace the MongoDB connection string in the following line with your own connection string:

```javascript
mongoose.connect('mongodb+srv://rishivasan:EEaIGzftx7C7vARa@nodeexp.colby.mongodb.net/?retryWrites=true&w=majority&appName=nodeexp');
```

If you want to keep sensitive credentials safe, use environment variables like `MONGO_URI` to store your MongoDB connection string.

## Troubleshooting

- **Connection Issues**: If you cannot connect to MongoDB, ensure that your MongoDB Atlas account is configured to allow connections from your IP address.
- **Server Not Starting**: Make sure you've installed all dependencies with `npm install`.
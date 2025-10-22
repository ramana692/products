# E-commerce Product API

A simple Node.js + Express API for managing products in an e-commerce application.

## Features

- Get all products
- Add a new product
- CORS enabled
- Request logging
- System information on server start

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node app.js
   ```

The server will start on `http://localhost:4000`

## API Endpoints

### GET /products
Returns all products.

**Response**
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "category": "Electronics"
  },
  ...
]
```

### POST /products
Add a new product.

**Request Body**
```json
{
  "name": "New Product",
  "price": 99.99,
  "category": "Category Name"
}
```

**Response**
```json
{
  "id": 4,
  "name": "New Product",
  "price": 99.99,
  "category": "Category Name"
}
```

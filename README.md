# 🛒 Products API

A simple REST API built with Node.js and Express.js to manage products.

---

## 🚀 Features

- Get all products
- Get product by ID
- Filter by category
- Add single product
- Add multiple products
- JSON based API

---

## 🛠 Tech Stack

- Node.js
- Express.js

---

## 📦 Installation

Clone the repo:

```bash
git clone <your-repo-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Server

### Production
```bash
npm start
```

### Development (auto reload)
```bash
npm run dev
```

Server runs at:
```
http://localhost:3000
```

---

## 📌 API Endpoints

### Get all products
```
GET /products
```

---

### Get product by ID
```
GET /products/:id
```

Example:
```
GET /products/1
```

---

### Get products by category
```
GET /products?category=men's clothing
```

---

### Add single product
```
POST /products
```

Body:
```json
{
  "title": "Shirt",
  "price": 40,
  "category": "men's clothing",
  "image": "url"
}
```

---

### Add multiple products
```
POST /products
```

Body:
```json
[
  {
    "title": "Shirt",
    "price": 40,
    "category": "men's clothing"
  },
  {
    "title": "Jeans",
    "price": 80,
    "category": "men's clothing"
  }
]
```

---

## 📂 Project Structure

```
.
├── index.js
├── package.json
└── README.md
```

---

## 🧠 Notes

- Data stored in memory only
- No database used
- For learning/demo purposes

---

## 👨‍💻 Author

Nishit Doshi

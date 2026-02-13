const express = require("express");
const app = express();

app.use(express.json());

const products = [
{
  id: 1,
  title: "Fjallraven Backpack",
  price: 109.95,
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: { rate: 3.9, count: 120 }
},
{
  id: 2,
  title: "Slim Fit T-Shirt",
  price: 22.3,
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  rating: { rate: 4.1, count: 259 }
},
{
  id: 3,
  title: "Cotton Jacket",
  price: 55.99,
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  rating: { rate: 4.7, count: 500 }
}
];


app.get("/all", (req, res) => {
  res.json(products);
});


app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product)
    return res.status(404).json({ message: "Product not found" });

  res.json(product);
});


app.post("/product", (req, res) => {
  const { title, price, category, image } = req.body;

  if (!title || !price)
    return res.status(400).json({ message: "Title and price required" });

  const newProduct = {
    id: products.length + 1,
    title,
    price,
    category,
    image,
    rating: { rate: 0, count: 0 }
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});
app.get("/category/:type", (req, res) => {
  const type = req.params.type.toLowerCase();

  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === type
  );

  if (filteredProducts.length === 0) {
    return res.status(404).json({ message: "No products found for this category" });
  }

  res.json(filteredProducts);
});

app.post("/products", (req, res) => {
  const newProducts = req.body;

  if (!Array.isArray(newProducts)) {
    return res.status(400).json({ message: "Send an array of products" });
  }

  const addedProducts = [];

  newProducts.forEach(p => {
    if (!p.title || !p.price) return; 

    const product = {
      id: products.length + 1,
      title: p.title,
      price: p.price,
      category: p.category,
      image: p.image,
      rating: { rate: 0, count: 0 }
    };

    products.push(product);
    addedProducts.push(product);
  });

  res.status(201).json({
    message: "Products added successfully",
    data: addedProducts
  });
});
 
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

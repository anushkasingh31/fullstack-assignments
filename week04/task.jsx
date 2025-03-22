import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const products = [
    { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product B", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product C", price: "$40", image: "https://via.placeholder.com/150" },
];

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between">
            <Link to="/" className="text-xl font-bold">Brand</Link>
            <div>
                <Link to="/" className="px-4">Home</Link>
            </div>
        </nav>
    );
}

function HeroSection() {
    return (
        <div className="text-center p-10 bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to Our Store!</h1>
            <p className="mt-4">Find the best products at unbeatable prices.</p>
        </div>
    );
}

function ProductList() {
    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded shadow">
                    <img src={product.image} alt={product.name} className="w-full" />
                    <h2 className="text-xl mt-2">{product.name}</h2>
                    <p className="text-gray-600">{product.price}</p>
                    <Link to={`/product/${product.id}`} className="mt-2 block bg-blue-500 text-white px-4 py-2 rounded text-center">View Details</Link>
                </div>
            ))}
        </div>
    );
}

function ProductDetails({ id }) {
    const product = products.find(p => p.id === Number(id));
    if (!product) return <p className="text-center mt-10">Product not found.</p>;
    return (
        <div className="p-10 text-center">
            <img src={product.image} alt={product.name} className="w-48 mx-auto" />
            <h2 className="text-2xl mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="mt-4">This is a detailed description of {product.name}.</p>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
            <p>&copy; 2025 Brand. Follow us on <a href="#" className="underline">Social Media</a></p>
        </footer>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<><HeroSection /><ProductList /></>} />
                <Route path="/product/:id" element={({ match }) => <ProductDetails id={match.params.id} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

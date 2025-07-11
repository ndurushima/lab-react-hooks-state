import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';
import './App.css';

const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', inStock: true, category: 'Fruits' },
  { id: 2, name: 'Milk', price: '$2.50', inStock: true, category: 'Dairy' }
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    return selectedCategory === 'all' || product.category === selectedCategory;
  });

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;

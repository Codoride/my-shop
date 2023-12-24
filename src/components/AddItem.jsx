import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert('Please fill in all fields');
      return;
    }

    const newItem = {
      name,
      price: parseFloat(price),
    };

    fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data);
        setName('');
        setPrice('');
      })
      .catch((error) => console.error('Error adding item:', error));
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

import React, { useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleSignup = () => {
    // Handle signup completion, e.g., switch to the login form
    console.log('Signup complete');
  };

  const handleAddItem = (item) => {
    // Handle adding item, you can update the state or perform other actions
    console.log('Item added:', item);
  };

  return (
    <div>
      <h1>My Shop</h1>
      {token ? (
        <>
          <AddItem onAdd={handleAddItem}/>
          <ItemList />
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Signup onSignup={handleSignup} />
        </>
      )}
    </div>
  );
}

export default App;

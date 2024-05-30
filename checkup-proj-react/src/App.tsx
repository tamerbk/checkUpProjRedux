// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootreducer'; // Updated import
import Login from './components/login';
import Test from './components/test';
import Card from './components/card1';
import Admin from './components/admin';

const store = createStore(rootReducer);

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/" element={isLoggedIn ? <Test /> : <Navigate to="/login" />} />
          <Route path="test" element={<Test />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/card1" element={<Card />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

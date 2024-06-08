"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/storeData', { name, value });
      alert('Data stored successfully');
    } catch (error) {
      alert('Failed to store data');
    }
  };

  return (
    <div>
      <h1>Store Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Value: </label>
          <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link legacyBehavior href="/dashboard">
        <a>Go to Dashboard</a>
      </Link>
    </div>
  );
};

export default Home;

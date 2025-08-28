import React, { useState } from 'react';

const API_BASE = "https://lambda-frog.onrender.com"; // Replace with your backend URL

function App() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = async () => {
    const res = await fetch(`${API_BASE}/person/create`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name })
    });
    const text = await res.text();
    setResult(text);
  };

  const handleQuery = async () => {
    const res = await fetch(`${API_BASE}/person/get?name=${encodeURIComponent(name)}`);
    const text = await res.text();
    setResult(text);
  };

  const handleDelete = async () => {
    const res = await fetch(`${API_BASE}/person/delete?name=${encodeURIComponent(name)}`);
    const text = await res.text();
    setResult(text);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center' }}>
      <h2>Neo4j Node Manager</h2>
      <input
        type="text"
        placeholder="Node name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginBottom: 12, padding: 8, width: '80%' }}
      /><br />
      <button onClick={handleAdd} style={{ margin: 4 }}>Add Node</button>
      <button onClick={handleQuery} style={{ margin: 4 }}>Query Node</button>
      <button onClick={handleDelete} style={{ margin: 4 }}>Delete Node</button>
      <div style={{ marginTop: 24, minHeight: 40, border: '1px solid #eee', padding: 8 }}>
        {result}
      </div>
    </div>
  );
}

export default App;
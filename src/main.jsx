import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <div className="brand">BHUMAN</div>
      <section className="message" aria-labelledby="page-title">
        <h1 id="page-title">Our website is<br />under development.</h1>
        <p>Thanks for visiting Bhuman. Please check back soon.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

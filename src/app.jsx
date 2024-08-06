import React from 'react';
import './app.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">KingsChicken</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to KingsChicken</h1>

        <p>Tempat Anda Bisa membeli Telor Dengan Kualitas Terbaik</p>

        <img src="https://cdn0-production-images-kly.akamaized.net/KenyqlZq1mMETSivRmEBa7HxEs4=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1205992/original/026620600_1460899960-telurayam.jpg" alt="" />
      </div>
    </div>
  );
};

export default App;

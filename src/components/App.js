import React from "react";

// Define Navbar Component
function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
}

// Define Home Component
function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

// Define About Component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;





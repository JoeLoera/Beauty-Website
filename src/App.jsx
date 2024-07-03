import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "./assets/makeupbrushes.jpg",
      }}
    >
      <Navbar />
      {/* Additional content will go here */}
    </div>
  );
};

export default App;

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AddProductForm from "./components/AddProductForm/AddProdoctForm";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">add</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Search from "./pages/Search";

import { restaurantList } from "./utils/restaurants";

export const RestaurantStateContext = React.createContext();

function App() {
  return (
    <RestaurantStateContext.Provider value={restaurantList}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RestaurantStateContext.Provider>
  );
}

export default App;

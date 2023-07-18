import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Review from './pages/Review'
import Like from './pages/Like'
import MyPage from './pages/MyPage';
import Sidebar from './pages/Sidebar';
import Auth from "./pages/Auth";
import GoogleButton from './pages/GoogleButton';


// Components
import Home from "./pages/Home";
import Search from "./pages/Search";

import { restaurantList } from "./utils/restaurants";

export const RestaurantStateContext = React.createContext();

export const DiaryStateContext = React.createContext();

export const DiraryDispatchContext = React.createContext();

const dummyData = [
  {
    id : 1,
    name : 'Julia',
    level : 'best'

  }

]


function App() {
  return (
    <RestaurantStateContext.Provider value={restaurantList}>
      <DiaryStateContext.Provider value={dummyData}>
      <DiraryDispatchContext.Provider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />

            <Route path ="/sidebar" element = {<Sidebar/>} />
            <Route path="/oauth/kakao/callback" element={<Authcheck />} />
            <Route path="/login" element={<GoogleButton />} />
            <Route path="/review" element = {<Review/>} />
            <Route path="/like" element = {<Like/>} />
            <Route path='/mypage' element = {<MyPage/>} />






          </Routes>
        </div>
      </BrowserRouter>
      </DiraryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </RestaurantStateContext.Provider>
  );
}

export default App;
function Authcheck() {
  return Auth()
}


import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import  { useReducer, useRef, useEffect} from 'react';
import { useState } from 'react';

// pages 
import Review from './pages/Review'
import Like from './pages/Like'
import MyPage from './pages/MyPage';
import Home from './pages/Home';

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

  // const [ < 상태 객체 >, < dispatch 함수 > ]

  

  return (
    <DiaryStateContext.Provider value={dummyData}>
      <DiraryDispatchContext.Provider>
      
        <BrowserRouter>
          <div className = "App">

            <Routes>
              <Route path ="/" element = {<Home/>} />
              <Route path="/review" element = {<Review/>} />
              <Route path="/like" element = {<Like/>} />
              <Route path='/mypage' element = {<MyPage/>} />

            </Routes>
          </div>

        </BrowserRouter>
      </DiraryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      
  );
}

export default App;

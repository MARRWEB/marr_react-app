

import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom"



// pages 
import Review from './pages/Review'
import Like from './pages/Like'
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Auth from "./pages/Auth";
import GoogleButton from './pages/GoogleButton';


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
              <Route path ="/sidebar" element = {<Home/>} />
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
      
  );
}

export default App;



function Authcheck() {
  return Auth()
}
import "./App.css";
import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { restaurantList } from "./utils/restaurants";
import { reviewList } from "./utils/reviews";
import { restaurantLikedList } from "./utils/restaurants_liked";
import { reducer } from "./utils/reducer";

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
import StoreReview from "./pages/StoreReview";
import New from "./pages/New";
import Edit from "./pages/Edit";
import MyReview from "./pages/MyReview";
import MyMarrPlaces from "./pages/MyMarrPlaces";

export const ReviewStateContext = React.createContext();
export const StoreDispatchContext = React.createContext();
export const RestaurantStateContext = React.createContext();
export const RestaurantStateContext2 = React.createContext();

export const DiaryStateContext = React.createContext();
export const DiraryDispatchContext = React.createContext();


function App() {
  // const [data, dispatch] = useReducer(reducer, reviewList);
  const dataId = useRef(0);
  const [likedList, dispatch] = useReducer(reducer, restaurantLikedList);

  const contextValues = {
    restaurantList: restaurantList,
    storeList: likedList,
  };
  
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content, emotion, isLiked) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
        isLiked,
      },
    });
  };
  return (
     <RestaurantStateContext2.Provider value={restaurantList}>
      <DiaryStateContext.Provider value={dummyData}>
        <DiraryDispatchContext.Provider>
          <ReviewStateContext.Provider value={reviewList}>
            <StoreDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
              <RestaurantStateContext.Provider value={contextValues}>
                <BrowserRouter>
                  <div className="App">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/search" element={<Search />} />
                      <Route path="/StoreReview" element={<StoreReview />} />
                      <Route path="/New" element={<New />} />
                      <Route path="/Edit" element={<Edit />} />
                      <Route path="/MyReview" element={<MyReview />} />
                      <Route path="/MyMarrPlaces" element={<MyMarrPlaces />} />
                      <Route path ="/sidebar" element = {<Sidebar/>} />
                      <Route path="/oauth/kakao/callback" element={<Authcheck />} />
                      <Route path="/login" element={<GoogleButton />} />
                      <Route path="/review" element = {<Review/>} />
                      <Route path="/like" element = {<Like/>} />
                      <Route path='/mypage' element = {<MyPage/>} />
                    </Routes>
                  </div>
                </BrowserRouter>
              </RestaurantStateContext.Provider>
            </StoreDispatchContext.Provider>
          </ReviewStateContext.Provider>
        </DiraryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </RestaurantStateContext2.Provider>
  );
}

export default App;
function Authcheck() {
  return Auth()
}
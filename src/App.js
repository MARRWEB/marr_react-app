import "./App.css";
import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Utils
import { reducer } from "./utils/reducer";
import { restaurantList } from "./utils/restaurants";
import { reviewList } from "./utils/reviews";
import { restaurantLikedList } from "./utils/restaurants_liked";
import { userList } from "./utils/users";

// Pages
import Sidebar from "./pages/Sidebar";
import Auth from "./pages/Auth";
import GoogleButton from "./pages/GoogleButton";

// Components
import Home from "./pages/Home";
import Search from "./pages/Search";
import StoreReview from "./pages/StoreReview";
import New from "./pages/New";
import Edit from "./pages/Edit";
import MyReview from "./pages/MyReview";
import MyMarrPlaces from "./pages/MyMarrPlaces";

export const RestaurantDispatchContext = React.createContext();
export const RestaurantStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, reviewList);
  const dataId = useRef(0);

  const contextValues = {
    restaurantList: restaurantList,
    storeList: restaurantLikedList,
    reviewList: reviewList,
    userList: userList,
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
    <RestaurantDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
      <RestaurantStateContext.Provider value={contextValues}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/store-review/:storeName"
                element={<StoreReview />}
              />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/my-page" element={<Sidebar />} />
              <Route path="/my-reviews" element={<MyReview />} />
              <Route path="/my-marr-places" element={<MyMarrPlaces />} />
              <Route path="/oauth/kakao/callback" element={<Authcheck />} />
              <Route path="/login" element={<GoogleButton />} />
            </Routes>
          </div>
        </BrowserRouter>
      </RestaurantStateContext.Provider>
    </RestaurantDispatchContext.Provider>
  );
}

export default App;
function Authcheck() {
  return Auth();
}

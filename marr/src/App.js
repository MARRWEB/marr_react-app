import "./App.css";
import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { restaurantList } from "./utils/restaurants";
import { reviewList } from "./utils/reviews";

// Components
import Home from "./pages/Home";
import Search from "./pages/Search";
import StoreReview from "./pages/StoreReview";
import New from "./pages/New";
import Edit from "./pages/Edit";
import MyReview from "./pages/MyReview";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const ReviewStateContext = React.createContext();
export const ReviewDispatchContext = React.createContext();
export const RestaurantStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, reviewList);
  const dataId = useRef(0);

  // CREATE
  const onCreate = (
    level,
    date,
    content,
    score,
    store,
    marr_pic,
    profile_pic
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        level,
        date: new Date(date).getTime(),
        content,
        score,
        store,
        marr_pic,
        profile_pic,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (
    targetId,
    level,
    date,
    content,
    score,
    store,
    marr_pic,
    profile_pic
  ) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        level,
        date: new Date(date).getTime(),
        content,
        score,
        store,
        marr_pic,
        profile_pic,
      },
    });
  };
  return (
    <ReviewStateContext.Provider value={data}>
      <ReviewDispatchContext.Provider>
        <RestaurantStateContext.Provider value={restaurantList}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/StoreReview" element={<StoreReview />} />
                <Route path="/New" element={<New />} />
                <Route path="/Edit" element={<Edit />} />
                <Route path="/MyReview" element={<MyReview />} />
              </Routes>
            </div>
          </BrowserRouter>
        </RestaurantStateContext.Provider>
      </ReviewDispatchContext.Provider>
    </ReviewStateContext.Provider>
  );
}

export default App;

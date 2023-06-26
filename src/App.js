import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import MyMarrPlaces from "./pages/MyMarrPlaces";

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
      // 수정 시 전체 데이터를 전달
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

export const StoreStateContext = React.createContext();
export const StoreDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "마유유마라탕_강남역점",
    date: 1686983354157,
    isLiked: true,
  },
  {
    id: 2,
    emotion: 2,
    content: "반티엔야오_강남점",
    date: 1687083354158,
    isLiked: true,
  },
  {
    id: 3,
    emotion: 3,
    content: "양궈푸마라탕_역삼점",
    date: 1687183354159,
    isLiked: true,
  },
  {
    id: 4,
    emotion: 4,
    content: "훠궈나라_강남점",
    date: 1687283354160,
    isLiked: true,
  },
  {
    id: 5,
    emotion: 5,
    content: "마라홀릭_한티점",
    date: 1687383354161,
    isLiked: true,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  // CREATE (Item에 생성 시 필요한 정보)
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
    <StoreStateContext.Provider value={data}>
      <StoreDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              {/* Routes 내의 컴포넌트만 변화. path가 '/'일 때 Home 컴포넌트를 render */}
              <Route path="/" element={<Home />} />
              <Route path="/myMarrPlaces" element={<MyMarrPlaces />} />
            </Routes>
          </div>
        </BrowserRouter>
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
}

export default App;

import './App.css';
import React, { useReducer, useRef } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import StoreReview from './pages/StoreReview'
import New from './pages/New'
import Edit from './pages/Edit'
import MyReview from './pages/MyReview'


// //Components
// import MyButton from './components/MyButton';
// import MyHeader from './components/MyHeader';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type){
    case 'INIT' : {
      return action.data;
    }
    case 'CREATE': {
      const newItem= {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it)=> it.id === action.data.id? {...action.data}: it)
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const ReviewStateContext = React.createContext();
export const ReviewDispatchContext = React.createContext();

const dummyData = [
  {
    id: "마라사랑",
    score: 5,
    level:3,
    content: "존맛탱탱구리 여기 마라 개맛잇음",
    store: "부천마라 1호점",
    marr_pic : 1,
    date: 1638969241492,
    profile_pic : 1,
  },
  {
    id: '부천마라왕',
    score: 4,
    level: 2,
    content: "여기절대안감 개노맛",
    store: "부천마라 3호점",
    marr_pic:2,
    date: 1438969241494,
    profile_pic:2,
  }
]

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId= useRef(0); 

  // CREATE
  const onCreate = (level, date, content, score, store, marr_pic, profile_pic) => {
    dispatch({type:"CREATE", data: {
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
    dispatch({type:"REMOVE", targetId});
  }

  //EDIT
  const onEdit = (targetId, level, date, content, score, store, marr_pic, profile_pic) => {
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
    <ReviewStateContext.Provider value= {data}>
      <ReviewDispatchContext.Provider value={{
        onCreate, onEdit, onRemove,
      }}>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/StoreReview' element={<StoreReview/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/Edit' element={<Edit/>}/>
        <Route path='/MyReview/:id' element={<MyReview/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </ReviewDispatchContext.Provider>
    </ReviewStateContext.Provider>
  );
}

export default App;

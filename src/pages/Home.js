import { useContext, useState  } from "react";
import { useRef } from "react";

import { useEffect } from "react";
import {userContext} from "react";
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import { useNavigate } from "react-router-dom";
import {DiaryStateContext} from "../App";
import MyPage from "./MyPage";


const Home = ({dummyData}) => {
    const navigate = useNavigate();
    const userinfo = useContext(DiaryStateContext);
    console.log("dummyData",userinfo);

    return (
      <div className="Home">
        <MyHeader headText={"당신의 MARR"} />
        
        <MyPage/>

        <div className="side">
          <MyButton text={'리뷰 모아보기'} onClick={() => navigate('/review')}/>

          <MyButton c text={'내가 찜한 마라'} onClick={() => navigate('/like')}/>
        </div>


        <div className="marr_type">
          <h2>나의 마라 취향</h2>
          <div className = "type">
            <h3>향신료</h3>
            <h3>맵기</h3>
            <h3>고기종류</h3>
          </div>
        </div>


      </div>
      )
}

export default Home;
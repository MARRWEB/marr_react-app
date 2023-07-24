import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { StoreStateContext } from "../App";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import StoreList from "../components/StoreList";

const MyMarrPlaces = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyHeader
        headText={"내가 찜한 마라"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      ></MyHeader>
      <img
        className="img"
        src={process.env.PUBLIC_URL + `assets/MyPlaces/sample.png`}
        alt="sample img"
      />
      <StoreList />
    </div>
  );
};

export default MyMarrPlaces;

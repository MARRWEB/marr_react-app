
import { BrowserRouter,BrowserRouter as Route, Router, Routes} from "react-router-dom";
import { useState } from "react";
import Auth from "./Auth";
import MyHeader from "../components/MyHeader";

import GoogleButton   from "./GoogleButton";

const Login = () => {

  const REST_API_KEY = "32bb1444ddc8c71c3924daaef84ae5e6";
  const REDIRECT_URI = "http://localhost:3007/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  

  const [flavor, setflavor] = useState();
    const handleClickRadioButton1 = (e) =>{
      console.log(e.target.value);
      setflavor(e.target.value)
    }

    const [spicy, setspicy] = useState();
    const handleClickRadioButton2 = (e) =>{
      console.log(e.target.value);
      setspicy(e.target.value)
    }

    const [meat, setmeat] = useState();
    const handleClickRadioButton3 = (e) =>{
      console.log(e.target.value);
      setmeat(e.target.value)
    }

    const env = process.env;
    env.PUBLIC_URL  = env.PUBLIC_URL || "";
    const flavor_img = process.env.PUBLIC_URL + `/assets/flavor.png`;
    const meat_img = process.env.PUBLIC_URL + `/assets/meat.png`;
    const spicy_img = process.env.PUBLIC_URL + `/assets/spicy.png`;
  return (
   <div>
    <MyHeader headText={"당신의 MARR Login"} />
    <div clssName = "login">
      <div className = "kakao">
          <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </div>
      <div className = "kakao">
          <GoogleButton />
      </div>
  </div>

   </div>
     
  );
}
export default Login;

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyHeader from "../components/MyHeader";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const GoogleAuth = () => {
  const clientId =
    "730721968234-8v16gcc0l0hs5g5243c0b17a0k3oiktc.apps.googleusercontent.com";
  const session_token = localStorage.getItem("userToken");

  const handleSuccess = async (response) => {
    const clientId = response.clientId;
    const token = response.credential;
    // const decodedInfo = jwtDecode(response.credential);

    let body = {
      data: {
        clientId: clientId,
        token: token,
      },
    };

    // Send to server
    // axios.post('api/google/login', body)
    //.then(response => {
    // })
    // .catch(err => alert(err))

    window.localStorage.setItem("userToken", JSON.stringify(token));
    window.location.href = "/";
  };

  const handleFailure = (err) => {
    console.log("fail", err);
  };

  if (!session_token) {
    return (
      <div>
        <MyHeader headText={"당신의 MARR"} />
        <div className="Google">
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin onSuccess={handleSuccess} onFailure={handleFailure} />
          </GoogleOAuthProvider>
        </div>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default GoogleAuth;

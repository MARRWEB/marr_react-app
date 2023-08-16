import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyHeader from "./../components/MyHeader";

const GoogleButton = ({ setLogged }) => {
  const clientId =
    "730721968234-8v16gcc0l0hs5g5243c0b17a0k3oiktc.apps.googleusercontent.com";

  useEffect(() => {
    // This useEffect will be called when the component mounts.
    // If you want to trigger the navigation immediately on successful login,
    // you can put the navigation logic here.
  }, []);

  const handleSuccess = (res) => {
    console.log("success", res);
    setLogged(true);
    window.location.href = "/"; // Navigate to the target page.
  };

  const handleFailure = (err) => {
    console.log("fail", err);
  };

  return (
    <>
      <MyHeader headText={"당신의 MARR"} />
      <div className="Google">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} onFailure={handleFailure} />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default GoogleButton;

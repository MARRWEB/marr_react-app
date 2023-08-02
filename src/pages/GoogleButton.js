import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MyHeader from './../components/MyHeader';


const GoogleButton = () => {
  const clientId = '1059585472363-vn4ejudkdn6fkncnnebcjoiga8bh17bt.apps.googleusercontent.com';

  useEffect(() => {
    // This useEffect will be called when the component mounts.
    // If you want to trigger the navigation immediately on successful login,
    // you can put the navigation logic here.
  }, []);

  const handleSuccess = (res) => {
    console.log('success', res);
    window.location.href = '/sidebar'; // Navigate to the target page.
  };

  const handleFailure = (err) => {
    console.log('fail', err);
  };

  return (
    <>
      <MyHeader headText={"당신의 MARR"} />
      <div className="Google">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onFailure={handleFailure}
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default GoogleButton;

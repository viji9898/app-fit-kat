import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const location = useLocation();
  const { pathname } = location;

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };

  return <Button onClick={handleSignUp}>Sign Up</Button>;
};

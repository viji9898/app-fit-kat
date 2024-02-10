import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const location = useLocation();
  const { pathname } = location;

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return <Button onClick={handleLogin}>Log In</Button>;
};

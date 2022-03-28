import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function GoogleAuthProvider({ children }) {
  const googleAuth = useGoogleLogin({
    clientId: "140089659479-hm27qo5li5gkt8cjb645k1644g3cnssa.apps.googleusercontent.com",
  });

  return <GoogleAuthContext.Provider value={googleAuth}>{children}</GoogleAuthContext.Provider>;
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);

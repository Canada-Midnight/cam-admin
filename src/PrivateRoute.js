/* import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useGoogleAuth } from "./components/GoogleAuth/googleAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = props => {
  const [pending, setPending] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useGoogleAuth() => {
  }
}

export default PrivateRoute;
import { useGoogleLogin } from "react-use-googlelogin";
import MDBox from "./components/MDBox";
import LoginButton from "./components/GoogleAuth/LoginButton";
import LogoutButton from "./components/GoogleAuth/LogoutButton";
import MKTypography from "@mui/material/Typography";
import MDAvatar from "./components/MDAvatar";
import React from "react";

const { signIn, signOut, googleUser, isSignedIn } = useGoogleLogin({
  clientId: "140089659479-hm27qo5li5gkt8cjb645k1644g3cnssa.apps.googleusercontent.com",
});
<MDBox ml={1}>
  <LoginButton onclick={signIn} />
  <LogoutButton onclick={signOut} />
  {isSignedIn && (
    <MDBox>
      <MKTypography>
        {googleUser.profileObj.name}
        <MDAvatar
          src={googleUser.profileObj.imageUrl}
          alt={googleUser.profileObj.name}
        />
      </MKTypography>
    </MDBox>
  )}
</MDBox> */
import React from "react";
import MKTypography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGoogleAuth } from "./googleAuth";
import MDButton from "../MDButton";

function LoginButton() {
  const { signIn } = useGoogleAuth();
  return (
    <MDButton onClick={signIn} variant="gradient" color="info" fullWidth>
      <MKTypography color="whitesmoke" className="h1">
        <FontAwesomeIcon icon="fa-brands fa-google" />
        &nbsp; Login
      </MKTypography>
    </MDButton>
  );
}

export default LoginButton;

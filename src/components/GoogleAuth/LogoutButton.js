import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useGoogleAuth } from "./googleAuth";
import MDButton from "../MDButton";

function LogoutButton() {
  const { signOut } = useGoogleAuth();

  return (
    <MDButton icon={faGoogle} onClick={signOut}>
      Logout
    </MDButton>
  );
}

export default LogoutButton;

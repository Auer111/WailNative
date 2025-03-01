import React from "react";
import { Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return <Button title="Logout" onPress={handleLogout} />;
}

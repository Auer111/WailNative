import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";

import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "792758132661-s7t7tm39nkrgv0vqpatlj14ap3t4ohft.apps.googleusercontent.com",
    redirectUri: "http://localhost:8082", // Replace with your actual redirect URI
    iosClientId: "YOUR_IOS_CLIENT_ID",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    scopes: ["openid", "profile", "email"], // Ensure you are requesting the necessary scopes
    responseType: "id_token",
  });

  useEffect(() => {
    console.log("Response:", response); // Log the entire response object for debugging

    if (response?.type === "success") {
      const idToken = response.params?.id_token; // Extract access token
      console.log("idToken:", idToken); // Log the access token to verify it's being retrieved correctly

      if (idToken) {
        const credential = GoogleAuthProvider.credential(idToken); // Use the ID token to sign in
        signInWithCredential(auth, credential)
          .then((userCredential) => {
            console.log("User signed in with ID token:", userCredential.user);
          })
          .catch((error) => {
            console.error("Error signing in with ID token:", error);
          });
      } else {
        console.error("No ID token received from Google API.");
      }
    }
  }, [response]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: 200, height: 100, marginBottom: 20 }}
        source={require("@/assets/whale.svg")}
        resizeMode="contain"
      />
      <Text variant="displayLarge">Wail</Text>
      <Button icon="google" mode="contained" onPress={() => promptAsync()}>
        Sign in with Google
      </Button>
    </View>
  );
}

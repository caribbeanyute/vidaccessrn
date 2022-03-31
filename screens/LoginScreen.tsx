import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

import { Text, View } from "../components/Themed";
import InputField from "../components/InputField";
import { Image } from "react-native";
import { RootStackScreenProps } from "../types";
import React from "react";

var s = require("../assets/images/s-icon.png");

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}
      style={styles.wrapper}
    >
      <View>
        <Image style={styles.image} source={s}></Image>

        <Text style={styles.title}>Login</Text>

        <InputField></InputField>
        <InputField></InputField>
        <TouchableOpacity
          onPress={() => navigation.replace("Root")}
          style={styles.link}
        >
          <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  wrapper: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 400,
    resizeMode: "contain",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

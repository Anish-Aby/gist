import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginPageStar from "../icons/LoginPageStar";

export default function Box({ content, isFirst }) {
  return (
    <View style={styles.container}>
      {isFirst && <LoginPageStar style={styles.star} />}

      <View style={styles.boxShadow}></View>
      <View style={styles.box}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    minHeight: 150,
    width: "85%",
  },
  box: {
    backgroundColor: "#FFF4E8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    width: "100%",
    borderColor: "#191718",
    borderWidth: 2,
    borderRadius: 15,
    position: "absolute",
    padding: 10,
    top: 0,
    left: 0,
    zIndex: 20, // Higher zIndex for box
  },
  boxShadow: {
    backgroundColor: "#191718",
    top: 6,
    left: 6,
    width: "100%",
    minHeight: 100,
    borderRadius: 15,
    position: "absolute",
    zIndex: 10, // Lower zIndex for boxShadow
  },

  content: {
    fontSize: 23,
    fontFamily: "BCTRegular",
    textAlign: "center",
  },

  star: {
    zIndex: 30,
    position: "absolute",
    right: -30,
    top: -40,
  },
});

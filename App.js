import { useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";
import Logo from "./ui/icons/Logo";
import Box from "./ui/components/Box";
import CustomButton from "./ui/components/Button";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Platform } from "react-native";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    TeleRegular: require("./assets/fonts/TeleRegular.otf"),
    BCTRegular: require("./assets/fonts/BCTRegular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView style={styles.mainContainer} onLayout={onLayoutRootView}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.container}>
        <Box
          content={"Write out your thoughts & share it with the world"}
          isFirst={true}
        />
        <Box content={"Explore books through different perspectives"} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          type={"primary"}
          content={"continue with google"}
          icon={"google"}
        />
        <CustomButton
          type={"secondary"}
          content={"login with email"}
          icon={"email"}
        />
        <Text style={styles.footer}>
          By creating an account you agree with our Terms of Service, Privacy
          Policy, and our default Notification Settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const topPadding =
  Platform.OS === "android"
    ? Constants.statusBarHeight + 60
    : Constants.statusBarHeight;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    gap: 5,
    padding: 0,
    backgroundColor: "#FFF4E8",
    justifyContent: "space-between",
    paddingBottom: 50,
  },

  logoContainer: {
    paddingTop: topPadding,
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  buttonContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: 10,
  },

  footer: {
    fontFamily: "TeleRegular",
    lineHeight: 20,
    width: "80%",
    textAlign: "center",
    fontSize: 12,
  },
});

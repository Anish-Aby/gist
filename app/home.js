import { useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Box from "./../ui/components/Box";
import CustomButton from "./../ui/components/Button";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LogoFeed from "../ui/icons/LogoFeed";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    TeleRegular: require("./../assets/fonts/TeleRegular.otf"),
    BCTRegular: require("./../assets/fonts/BCTRegular.otf"),
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
        <LogoFeed />
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryButton}>
          <Text style={styles.categoryText}>For you</Text>
        </View>
        <View style={styles.categoryButton2}>
          <Text style={styles.categoryText}>Following</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF4E8",
    paddingBottom: 50,
  },

  logoContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
    borderColor: "#191718",
    borderBottomWidth: 1,
  },

  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 65,
    alignItems: "center",
    borderBottomWidth: 1,
  },

  categoryButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
    borderRightWidth: 1,
    backgroundColor: "#FFC900",
  },

  categoryButton2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
  },

  categoryText: {
    fontSize: 16,
    fontFamily: "TeleRegular",
    lineHeight: 16,
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

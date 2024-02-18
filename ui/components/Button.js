import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomButton({ type, content, icon }) {
  return (
    <TouchableOpacity
      onPress={() => {
        /* do this */
      }}
    >
      <View style={type === "primary" ? styles.primary : styles.secondary}>
        {icon === "google" ? (
          <FontAwesome name="google" color={"black"} size={20} />
        ) : (
          <Ionicons name="mail-outline" color={"white"} size={20} />
        )}

        <Text
          style={
            type === "primary"
              ? styles.textColorPrimary
              : styles.textColorSecondary
          }
        >
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    display: "flex",
    borderRadius: 1500,
    backgroundColor: "#EB8ED4",
    paddingVertical: 15,
    paddingHorizontal: 5,
    minWidth: "85%",
    borderWidth: 2,
    borderColor: "#191718",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  secondary: {
    display: "flex",
    borderRadius: 1500,
    backgroundColor: "#191718",
    paddingVertical: 15,
    paddingHorizontal: 5,
    minWidth: "85%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  textColorPrimary: {
    color: "#191718",
    fontSize: 16,
    fontFamily: "TeleRegular",
  },

  textColorSecondary: {
    color: "#F5F3F3",
    fontSize: 16,
    fontFamily: "TeleRegular",
  },
});

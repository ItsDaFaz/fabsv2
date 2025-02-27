import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//custom button component
const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <View style={isDark ? styles.containerDark : styles.container}>
      <Text
        style={{
          color: isDark ? "#fff" : "#000",
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <Text>{isDark}.</Text>
      {/* <Button
        label="Open Dev Menu"
        onPress={() => {
          DevMenu.openMenu();
        }}
      /> */}
      <Button
        label="Toggle Dark Theme"
        onPress={() => {
          setIsDark(!isDark);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#4630eb",
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

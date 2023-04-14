import { Appbar, Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Appbar.Header style={{ width: "100%" }}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <Text style={{ height: 100 }}>Hello, it's me.</Text>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
}

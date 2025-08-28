import {View, Text} from "react-native";

// Define o componente funcional Home
export const Home: React.FC = () => {
  return (
    <View style={{
        width: "100%",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        height: "100%"
    }}>
      <Text
            style={{
                color: "gray",
                fontSize: 40,
            }}>
        Home
        </Text>
    </View>
  );
}

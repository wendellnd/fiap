import {View, Text} from "react-native";

// Define o componente funcional Contact
export const Contact: React.FC = () => {
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
        Contact
        </Text>
    </View>
  );
}

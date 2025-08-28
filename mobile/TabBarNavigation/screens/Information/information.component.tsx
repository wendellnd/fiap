import {View, Text, StyleProp, TextStyle} from "react-native";

const styles: StyleProp<TextStyle> = {
        width: "100%",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        height: "100%"
};

// Define o componente funcional Information
export const Information: React.FC = () => {
  return (
    <View style={styles}>
      <Text
            style={{
                color: "gray",
                fontSize: 40,
            }}>
        Information 
        </Text>
    </View>
  );
}

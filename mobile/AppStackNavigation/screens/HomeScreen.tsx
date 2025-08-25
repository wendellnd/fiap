import React from "react";
// Importa componentes básicos do React Native
import { View, Text, Button, StyleSheet } from "react-native";
// Importa tipos para navegaçao da pilha
import { StackScreenProps } from "@react-navigation/stack";

// Define os tipos das rotas da navegação
type RootStackParamList = {
  Home: undefined; //Tela Home não recebe parametros
  Details: undefined; //Tela Details não recebe parametros
};

//Define as props esperadas para a tela Home usando o tipo de navegaçao
type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

//Componentes funcionbais da tela home
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    //View Centralizada
    <View style={styles.container}>
      <Text>Bem Vindo a Home Screen</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

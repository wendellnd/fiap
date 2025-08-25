import React from "react";
// Importa componentes básicos do React Native
import { View, Text, StyleSheet } from "react-native";
// Importa tipos para navegaçao da pilha
import { StackScreenProps } from "@react-navigation/stack";

// Define os tipos das rotas da navegação
type RootStackParamList = {
  Home: undefined; //Tela Home não recebe parametros
  Details: undefined; //Tela Details não recebe parametros
};

//Define as props esperadas para a tela Home usando o tipo de navegaçao
type DetailsScreenProps = StackScreenProps<RootStackParamList, "Details">;

//Componentes funcionbais da tela home
const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    //View Centralizada
    <View style={styles.container}>
      <Text>Detalhes Screen</Text>
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
// Exporta o componente para ser usado em outro arquivos
export default DetailsScreen;

// Importa os módulos necessários do React e React Native
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/user";

// Define a interface para as propriedades da tela restrita
interface AddUserScreenProps {
  navigation: any;
  route: any;
}

// Define a tela restrita do aplicativo
const AddUserScreen: React.FC<AddUserScreenProps> = ({ navigation, route }) => {
  const [id, setId] = useState<number | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const user = route.params?.user;
    if (user) {
      setId(user.id);
      setName(user.name);
      setEmail(user.email);
      setImageUrl(user.imageUrl);
    }
  }, [route.params?.user]);

  const handleSave = () => {
    const newUser: User = { name, email, imageUrl };

    if (!name || !email || !imageUrl) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    AsyncStorage.getItem("userList").then((value) => {
      let userList = value ? (JSON.parse(value) as User[]) : ([] as User[]);

      if (id !== undefined) {
        userList = userList.map((user) =>
          user.id === id ? { ...newUser, id } : user
        );
      } else {
        const newId = userList.length > 0 ? userList.length + 1 : 1;
        userList.push({ ...newUser, id: newId });
      }

      AsyncStorage.setItem("userList", JSON.stringify(userList));
    });

    navigation.navigate("UserList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>URL do avatar</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a URL do avatar"
          onChangeText={setImageUrl}
          value={imageUrl}
        />
      </View>

      <View style={{ width: "80%" }}>
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
};

// Exporta o componente AddUserScreen
export default AddUserScreen;

// Define o estilo da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    width: "80%",
  },
  inputTitle: {
    fontSize: 16,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlign: "left",
  },
});

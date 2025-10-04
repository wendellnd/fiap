import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import AddUserScreen from "./screens/AddUserScreen";
import UserList from "./screens/UserListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          options={({ navigation }) => ({
            title: "Lista de Usuários",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AddUser")}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="add" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
          component={UserList}
        />
        <Stack.Screen
          name="AddUser"
          options={{
            title: "Formulário de usuário",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={AddUserScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

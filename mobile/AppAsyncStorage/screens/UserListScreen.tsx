import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/user";

interface UserListScreenProps {
  navigation: any;
}

const UserListScreen: React.FC<UserListScreenProps> = ({ navigation }) => {
  const [userList, setUserList] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const value = await AsyncStorage.getItem("userList");
      if (value) {
        setUserList(JSON.parse(value));
      }
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadUsers();
    });

    return unsubscribe;
  }, [navigation]);

  const renderUserItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      style={styles.userCard}
      onPress={() => {
        return navigation.navigate("AddUser", { user: item });
      }}
    >
      <View style={styles.userRow}>
        <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {userList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum usuário cadastrado</Text>
          <Text style={styles.emptySubtext}>
            Toque no botão + no topo para adicionar um usuário
          </Text>
        </View>
      ) : (
        <FlatList
          data={userList}
          renderItem={renderUserItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  userCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: "#e0e0e0",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    fontWeight: "400",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    lineHeight: 20,
  },
});

export default UserListScreen;

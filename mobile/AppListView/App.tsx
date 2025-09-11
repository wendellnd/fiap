import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Interface para definir o tipo dos dados
interface ListItem {
  id: number;
  name: string;
}

export default function App() {
  // Dados de exemplo para FlatList
  const data: ListItem[] = [
    {id: 1, name: "Primeiro Item"},
    {id: 2, name: "Segundo Item"},
    {id: 3, name: "Terceiro Item"},
    {id: 4, name: "Quarto Item"}
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Items</Text>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {item.name}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333'
  },
  row: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  rowText: {
    fontSize: 16,
    color: '#333'
  }
});

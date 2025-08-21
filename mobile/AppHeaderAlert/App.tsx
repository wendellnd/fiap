//AppHeaderAlert
import * as React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Definindo os tipos das rotas
type RootStackParamList = {
  Home: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente para a tela inicial
function HomeScreen({navigation}: HomeScreenProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Exemplo Header Button</Text>
    </View>
  );
}

// Definindo os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  mainText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 24,
  }
})

// Componente principal do aplicativo
function App(): React.JSX.Element {
  const handleButtonPress = (): void => {
    Alert.alert('Informação', 'Você pressionou o botão')
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f8f9fa',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerShown: true // garante que o header vai ser mostrado
          }}>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                // Configuração do cabeçalho da tela home
                title: 'Header Button',
                headerRight: () => (
                  <Button 
                    title='info' 
                    color='#00cc00'
                    onPress={handleButtonPress}
                    />
                ),
              }}
            >
            </Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
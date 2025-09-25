import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './screens/TelaInicial';
import Planetas from './screens/Planetas';
import Galaxia from './screens/Galaxia';
import BuracoNegro from './screens/BuracoNegro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#b88849ff' },
          headerTintColor: '#000'
        }}>
        <Stack.Screen name="Início" component = { TelaInicial } />
        <Stack.Screen name="Planetas" component = { Planetas } />
        <Stack.Screen name="Galaxia" component = { Galaxia } />
        <Stack.Screen name="BuracoNegro" component = { BuracoNegro } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

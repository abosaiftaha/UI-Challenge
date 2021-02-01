import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Routes
import Home from './src/Home';
import FirstChallenge from './src/firstChallenge';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="first" component={FirstChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

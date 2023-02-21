import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SecondScreeen from './screens/SecondScreen';
import DriverRegistration from './screens/DriverRegistration';
import PassengerRegistration from './screens/PassengerRegistration';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "TraykPila"}}
        />
        <Stack.Screen
          name="PassengerRegistration"
          component={PassengerRegistration}
          options={{title: "Passenger Registration"}}
        />
        <Stack.Screen
          name="DriverRegistration"
          component={DriverRegistration}
          options={{title: "Driver Registration"}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

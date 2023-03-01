import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginButton from './screens/components/LoginButton';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterButton from './screens/components/RegisterButton';
import RegisterScreen from './screens/RegisterScreen';
import RegisterAs from './screens/RegisterAs';
import { useNavigation } from '@react-navigation/native'
import RegisterScreenDriver from './screens/RegisterScreenDriver';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer screenOptions={{ contentStyle: {backgroundColor: '#f6f6f6f'}}}>
      <Stack.Navigator>

          <Stack.Screen name="TraykPila" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register as" component={RegisterAs} />
          <Stack.Screen name="Passenger" component={RegisterScreen} />
          <Stack.Screen name="Driver" component={RegisterScreenDriver} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
});

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
import CompleteRegistration from './screens/DriverScreens/CompleteRegistration';
import PersonalInformation from './screens/DriverDocuments.js/PersonalInformation';
import DriverLicense from './screens/DriverDocuments.js/DriverLicense';
import Consents from './screens/DriverDocuments.js/Consents';
import VehicleInformation from './screens/DriverDocuments.js/VehicleInformation copy';



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
          <Stack.Screen name="Documents" component={CompleteRegistration} />
          <Stack.Screen name="Personal Information" component={PersonalInformation} />
          <Stack.Screen name="Driver License" component={DriverLicense} />
          <Stack.Screen name="Consents" component={Consents} />
          <Stack.Screen name="Vehicle Information" component={VehicleInformation} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
});

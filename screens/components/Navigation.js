import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import { useNavigation,NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../StartScreen';
import LoginScreen from '../LoginScreen';
import DriverScreen from '../DriverScreen';
import RegisterButton from '../components/RegisterButton';
import RegisterScreen from '../RegisterScreen';
import RegisterAs from '../RegisterAs';
import RegisterScreenDriver from '../RegisterScreenDriver';
import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {userInfo} = useContext(AuthContext);
  console.log(userInfo);

  return (
      <NavigationContainer screenOptions={{ contentStyle: {backgroundColor: '#f6f6f6f'}}}>
          <Stack.Navigator>
              {userInfo.token ? (
                <Stack.Screen name="DriverScreen" component={DriverScreen} />
              ) : (
               <>
                    <Stack.Screen name="TraykPila" component={StartScreen} />
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen} />
                    <Stack.Screen name="Register as" component={RegisterAs} />
                </>
               )}
               <Stack.Screen name="Passenger" component={RegisterScreen} />
              <Stack.Screen name="Driver" component={RegisterScreenDriver} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};


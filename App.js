import React from 'react';
import {StatusBar, Text, View, StyleSheet,} from 'react-native';
import Navigation from './screens/components/Navigation'
import { AuthProvider } from './screens/context/AuthContext';



export default function App() {

  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Logo from './components/Logo';
import LoginButton from './components/LoginButton';
import RegisterButton from './components/RegisterButton';


const Separator = () => <View style={styles.separator} />;

export default function StartScreen({  }) {
  return (
    <View style={styles.startContainer}>
      <Logo/>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>TraykPila</Text>
      <Text style={styles.tag}>Your number one tricycle booking App in the Philippines.</Text>
      <Text style={styles.separator}>________________________________________</Text>
      <Separator />
      <LoginButton/>
      <RegisterButton/>
    </View>

      
  )
  
}

const styles = StyleSheet.create({
  startContainer: {
    backgroundColor: "#007e94",
    width: '100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 0,
    color:'white'
  },
  tag: {
    color:'white',
    marginVertical: '4%',
  },
  divider: {
    color:'white'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#a51a1f',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  separator:{
    color: 'white',
    marginBottom: 10,
  }
});
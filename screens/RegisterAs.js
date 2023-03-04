import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import Logo from './components/Logo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function RegisterAs() {
  const navigation = useNavigation();
    return (
      <View style={styles.startContainer}>
        <Logo/>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title}>TraykPila</Text>
        <Text style={styles.tag}>Your number one tricycle booking App in the Philippines.</Text>
        <Text style={styles.separator}>________________________________________</Text>
        <Text style={styles.register}>Register As</Text>

        <View style={styles.buttons}>
            <View style={styles.buttonPassenger}>
              <TouchableOpacity 
                style={styles.driver}
                onPress={() =>
                    navigation.navigate('Driver', {name: 'Driver'})
                  }
              > 
                <Text style={styles.driver}>DRIVER</Text>
              </TouchableOpacity>
            </View>
              
            <View style={styles.buttonPassenger}>
                <TouchableOpacity 
                  style={styles.driver}
                  onPress={() =>
                      navigation.navigate('Passenger', {name: 'Passenger'})
                    }
                > 
                  <Text style={styles.driver}>PASSENGER</Text>
                </TouchableOpacity>
            </View>
        </View>
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


  register:{
    marginTop:'5%',
    fontSize: 20,
    color:'white',
  },



  driver:{
    padding: '5%',
    backgroundColor:'#05adca',
    borderRadius:5,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    },
    color:'white',
    fontSize: 17,
  },

  image: {
    width: '1%',
    height: 10,
  },

  separator:{
    color:'white',
  },


  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:'5%',
    width:'100%',

  },

  buttonPassenger:{
    width:'48%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#05adca',
    borderRadius:5,
    padding: '5%',
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    }
}
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
import Logo from './components/Logo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {
    return (
      <View style={styles.startContainer}>
      <Logo/>
      {/* <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>TraykPila</Text> */}
      <Text style={styles.title}>Login</Text>
      {/* <Text style={styles.tag}>Your number one tricycle booking App in the Philippines.</Text> */}
      <View style={styles.textFields}>
        <Ionicons style={styles.icon} name="md-checkmark-circle" size={32} color="#003b59" />
        <TextInput style={styles.input} placeholder="Email"/>
      </View>

      <View style={styles.textFields}>
        <Ionicons style={styles.icon} name="eye" size={32} color="#003b59" />
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password"/>
      </View>
  

      <Text style={styles.with}> ______________ Or Continue with ______________</Text>
      
      <View style={styles.continueFacebook}>
         <Button
            title="Facebook"
            color='white'
          />
      </View>
      <View style={styles.continueGoogle}>
         <Button
            title="Google"
            color='white'
          />
      </View>


      <View style={styles.buttonForgotPassword}>
          <Button
            style={styles.forgot}
            title="forgot password?"
            color='#64B5F6'
          />
      </View>    
      <View style={styles.haveAccount}>
        <Text style={styles.dont}>Don't you have an Account?</Text>
          <Button
            style={styles.forgot}
            title="Register"
            color='#64B5F6'
          />
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
    fontSize: 25,
    marginTop: 10,
    color:'white'
  },

  tag: {
    color:'white'
  },

  input: {
    flex: 1,
    padding:5,
    backgroundColor: '#fff',
    color: '#424242',
},

  textFields: {
    backgroundColor: "white",
    width:'80%',
    padding: 5,
    borderRadius: 25,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

   icon:{
    marginRight: 10,
    opacity:.5,
    paddingLeft:5,
   },

   buttonForgotPassword:{
    marginTop: 20,
    marginBottom: -10,
    flexDirection: "row",
    justifyContent: "flex-end"
   },

   forgot:{
    ssize: 1,
    color: 'white',
   },

   with:{
    marginVertical: 15,
    color:'white',
   },

   continueFacebook:{
    width:'80%',
    margin:10,
    backgroundColor:'#003b59',
    borderRadius:25,
    padding:5,
  },

  continueGoogle:{
    width:'80%',
    margin:10,
    backgroundColor:'#e2012b',
    borderRadius:25,
    padding:5,
  },

  haveAccount:{
    marginTop: -20,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dont:{
    fontSize: 17,
    color: 'white',
  }
  

});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import Logo from './components/Logo';
import Ionicons from '@expo/vector-icons/Ionicons';
import React , { useContext, useState } from 'react';
import  {AuthContext}  from './context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';


export default function LoginScreen() {

  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
   

    return (
      <View style={styles.startContainer}>
        <Spinner visible={isLoading} />
      <Logo/>
      <Text style={styles.title}>Login</Text>
      <View style={styles.textFields}>
        <Ionicons style={styles.icon} name="md-checkmark-circle" size={32} color="#003b59" />
        <TextInput 
        style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.textFields}>
        <Ionicons style={styles.icon} name="eye" size={32} color="#003b59" />
        <TextInput 
        secureTextEntry={true} 
        style={styles.input} 
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}

        />
      </View>
      <Button
        title="Login"
        onPress={() => {
          login(email,password);
        }}
      />
  

      <Text style={styles.with}> ______________ Or Continue with ______________</Text>
      
      <View style={styles.continueFacebook}>
            <TouchableOpacity 
                style={styles.btnFacebook}
                // onPress={() =>
                //     navigation.navigate('Register as', {name: 'Register as'})
                //   }
                > 
                <Text style={styles.btnFacebook}>FACEBOOK</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.continueGoogle}>
            <TouchableOpacity 
                style={styles.btnGoogle}
                // onPress={() =>
                //     navigation.navigate('Register as', {name: 'Register as'})
                //   }
                > 
                <Text style={styles.btnGoogle}>GOOGLE</Text>
            </TouchableOpacity>
      </View>


      <View style={styles.buttonForgotPassword}>
          <TouchableOpacity 
            style={styles.btnForgot}
            // onPress={() =>
            //     navigation.navigate('Register as', {name: 'Register as'})
            //   }
          > 
            <Text style={styles.btnForgot}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>    
      <View style={styles.haveAccount}>
        <Text style={styles.dont}>Don't you have an Account?</Text>
          <TouchableOpacity 
            style={styles.dont}
            // onPress={() =>
            //     navigation.navigate('Register as', {name: 'Register as'})
            //   }
          > 
            <Text style={styles.forgot}> Register</Text>
          </TouchableOpacity>
      </View>

      
    </View>
    )}








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
    borderRadius:25,
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
    fontSize: 15,
    color: '#64B5F6',
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
    padding:10,
  },

  btnFacebook:{
    color:'white',
    textAlign:'center',
  },

  continueGoogle:{
    width:'80%',
    margin:10,
    backgroundColor:'#e2012b',
    borderRadius:25,
    padding:10,
  },

  btnGoogle:{
    color:'white',
    textAlign:'center',
  },

  haveAccount:{
    marginTop: -20,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize:15,
  },

  dont:{
    fontSize: 17,
    color: 'white',
  },
  
  btnForgot:{
    color:'#64B5F6',
  },

});
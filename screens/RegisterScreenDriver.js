import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Logo from './components/Logo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreenDriver() {
  const navigation = useNavigation();
    return (
      <ScrollView>
      <View style={styles.startContainer}>
        <Text style={styles.title}>Sign Up</Text>

        {/* FULLNAME */}
        <View style={styles.textFields}>
          <Ionicons style={styles.icon} name="eye" size={32} color="#003b59" />
          <TextInput style={styles.input} placeholder="First name"/>
        </View>
        <View style={styles.textFields}>
          <Ionicons style={styles.icon} name="eye" size={32} color="#003b59" />
          <TextInput style={styles.input} placeholder="Last name"/>
        </View>

        {/* ADDRESS */}
        {/* <View style={styles.textFields}>
          <Ionicons style={styles.icon} name="eye" size={32} color="#003b59" />
          <TextInput style={styles.input} placeholder="Address"/>
        </View> */}

        {/* EMAIL */}
        <View style={styles.textFields}>
          <Ionicons style={styles.icon} name="eye" size={32} color="#003b59" />
          <TextInput style={styles.input} placeholder="Email"/>
        </View>

        {/* PASSWORD */}
        <View style={styles.textFields}>
          <Ionicons style={styles.icon} name="md-checkmark-circle" size={32} color="#003b59" />
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Password"/>
        </View>
        {/* CONFIRM-PASSWORD */}
        <View style={styles.textFields}>
          <Ionicons style={styles.icon} name="md-checkmark-circle" size={32} color="#003b59" />
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirm Password"/>
        </View>

        {/* REGISTER BUTTON */}
        <View style={styles.Register}>
            <TouchableOpacity 
                style={styles.btnRegister}
                onPress={() =>
                    navigation.navigate('Documents', {name: 'Documents'})
                  }
                > 
                <Text style={styles.btnFacebook}>REGISTER</Text>
            </TouchableOpacity>
          </View>

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
      
        <View style={styles.haveAccount}>
          <Text style={styles.dont}>Already have an Account?</Text>
            <TouchableOpacity 
              style={styles.forgot}
              // onPress={() =>
              //     navigation.navigate('Register as', {name: 'Register as'})
              //   }
            > 
              <Text style={styles.forgot}> Register</Text>
            </TouchableOpacity>
        </View>

        
    </View>
    </ScrollView>
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
    // textAlign: 'left',
    // alignItems:'left',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
    color:'white'
  },

  tag: {
    color:'lightgoldenrodyellow'
  },

  input: {
    flex: 1,
    // padding: 5,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 25,
},

  textFields: {
    backgroundColor: "white",
    width:'80%',
    padding: 5,
    borderRadius: 25,
    marginTop: '5%',
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },

   icon:{
    marginRight: 10,
    opacity: .5,
    paddingLeft:5,
   },

   forgot:{
    ssize: 1,
   },

   with:{
    marginVertical: 15,
    color:'white',
   },

   continueFacebook:{
    width:'80%',
    margin:10,
    backgroundColor:'#003b59',
    borderRadius: 25,
    padding:5,
  },

  continueGoogle:{
    width:'80%',
    margin:10,
    backgroundColor:'#e2012b',
    borderRadius:5,
    padding:5,
    borderRadius: 25,
  },

  haveAccount:{
    marginVertical: 20,
    flex:1,
    flexDirection: 'row',
    // alignItems: 'center',
  },

  Register:{
    width:'80%',
    margin:20,
    backgroundColor:'#558B2F',
    borderRadius: 25,
    padding:10,
},

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    // alignSelf: 'center',
  },
  label: {
    margin: 8,
  },

  dont:{
    color: 'white',
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
  
  forgot:{
    fontSize: 15,
    color: '#64B5F6',
   },
});
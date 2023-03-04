import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Form from '../components/form';


export default function CompleteRegistration() {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.traykpila}>TraykPila</Text>
          <Text style={styles.driver}>Driver</Text>
        </View>
        
        <Text style={styles.title}>Submit your documents</Text>

        <View style={styles.card}>
          <Text style={styles.tag}>Complete your application and start driving with TraykPila! Please provide the information below.</Text>
          <Form/>
        </View>

        <View style={styles.fillUp}>

        <View style={styles.form}>
          <Text style={styles.category}>Personal</Text>
          {/* PERSONAL INFORMATION */}
          <View style={styles.required}>
            <Text>Personal information</Text>
            <TouchableOpacity 
              style={styles.dont}
              onPress={() =>
                  navigation.navigate('Personal Information', {name: 'PersonalInformation'})
                }
            > 
              <Text style={styles.requiredBtn}> Required  &#10140;</Text>
            </TouchableOpacity>
          </View>

          {/* PERSONAL INFORMATION */}
          <View style={styles.required}>
            <Text>Driver License</Text>
            <TouchableOpacity 
              style={styles.dont}
              onPress={() =>
                  navigation.navigate('Driver License', {name: 'DriverLicense'})
                }
            > 
            <Text style={styles.requiredBtn}> Required  &#10140;</Text>
            </TouchableOpacity>
          </View>

          {/* CONCENTS */}
          <View style={styles.required}>
            <Text>Consents</Text>
            <TouchableOpacity 
              style={styles.dont}
              onPress={() =>
                  navigation.navigate('Consents', {name: 'Consents'})
                }
            > 
            <Text style={styles.requiredBtn}> Required &#10140;</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.form}>
          <Text style={styles.category}>Transport</Text>
          {/* PERSONAL INFORMATION */}
          <View style={styles.required}>
            <Text>Vehicle information</Text>
            <TouchableOpacity 
              style={styles.dont}
              onPress={() =>
                  navigation.navigate('Vehicle Information', {name: 'VehicleInformation'})
                }
            > 
              <Text style={styles.requiredBtn}> Required &#10140;</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
              style={styles.SubmitBtn}
              // onPress={() =>
              //     navigation.navigate('Personal Information', {name: 'PersonalInformation'})
              //   }
            > 
              <Text style={styles.btn}> Submit Application</Text>
            </TouchableOpacity>
        </View>
        </View>

      </View>

    )
  }








const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width:'100%',
    height:'100%',
  },

  title: {
    fontSize: 20,
    fontWeight:'bold',
    margin:15,
  },

  tag: {
    fontSize: 15,
    marginStart: 15,
    fontWeight:'500',
    color: '#636361',
    width:'70%',
  },

  card: {
    backgroundColor:'#e6effe',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 5,
    flexDirection:'row',
    alignItems:'center',
    // width:'100%',
  },

  form: {
    margin:15,
  },

  required: {
    // backgroundColor:'#dedede',
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth: 2,
    borderColor:'#f1f1f1',
  },

  SubmitBtn: {
    backgroundColor:'#558B2F',
    textAlign:'center',
    borderRadius:30,
    marginTop:20,
  },

  btn: {
    textAlign:'center',
    color:'white',
    padding:20,
    borderRadius:30,
    fontSize:20,
  },

  requiredBtn: {
    color:'#007e94',
    fontWeight:'bold',
  },

  category: {
    fontWeight:'bold',
  },

  fillUp: {
    marginVertical:20,
  },

  header: {
    alignItems:'center',
    marginVertical:10,
  },

  traykpila: {
    fontSize:25,
    fontWeight:'bold',
    color:'#007e94',

  },

});
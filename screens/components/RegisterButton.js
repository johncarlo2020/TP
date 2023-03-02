import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Imag, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function RegisterButton() {
const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonSignUp}
                onPress={() =>
                    navigation.navigate('Register as', {name: 'Register as'})
                  }
                > 
                <Text style={styles.btnSignUp}>SIGN UP</Text>
            </TouchableOpacity>
        </View>

    )
  }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width:'70%',
    },

    btnSignUp:{
        color:'white',
        textAlign:'center',
    },

    buttonSignUp:{
        width:'100%',
        margin:10,
        backgroundColor:'#e2012b',
        borderRadius:25,
        padding:10,
    }
});
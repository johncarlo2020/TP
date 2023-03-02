import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Imag, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function LoginButton() {
const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={() =>
                    navigation.navigate('Login', {name: 'login'})
                  }
                > 
                <Text style={styles.btnLogin}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    )
  }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width:'70%',
    },

    btnLogin:{
        color:'white',
        textAlign:'center',
    },

    buttonLogin:{
        width:'100%',
        margin:10,
        backgroundColor:'#003b59',
        borderRadius:25,
        padding:10,
    },

    buttonSignUp:{
        width:'100%',
        margin:10,
        backgroundColor:'#25C36B',
        borderRadius:5,
        padding:5,
        borderColor: 'white',
        borderWidth: 1,
    }
});
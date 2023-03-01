import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Imag, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function LoginButton() {
const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.buttonLogin}>
                <Button
                    title="LOGIN"
                    color='white'
                    onPress={() =>
                        navigation.navigate('Login', {name: 'login'})
                      }
                />
            </View>
        </View>

    )
  }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width:'70%',
    },

    buttonLogin:{
        width:'100%',
        margin:10,
        backgroundColor:'#003b59',
        borderRadius:25,
        padding:5,
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
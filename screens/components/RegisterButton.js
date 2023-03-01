import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Imag, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function RegisterButton() {
const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.buttonSignUp}>
                <Button
                    title="SIGN UP"
                    color='white'
                    onPress={() =>
                        navigation.navigate('Register as', {name: 'Register as'})
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


    buttonSignUp:{
        width:'100%',
        margin:10,
        backgroundColor:'#e2012b',
        borderRadius:25,
        padding:5,
    }
});
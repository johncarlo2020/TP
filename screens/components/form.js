import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function Form() {
    return <Image source={require('../images/form.png')} style={styles.image} />
  }

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginTop: 20,
        marginBottom: -10,
      },
});
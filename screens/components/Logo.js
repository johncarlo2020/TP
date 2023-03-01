import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function Logo() {
    return <Image source={require('../images/trayklogo.png.png')} style={styles.image} />
  }

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        marginTop: 20,
        marginBottom: -10,
      },
});
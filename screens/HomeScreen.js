import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';



export default function HomeScreen({navigation}) {

    return(
        <View>
            <Button
                title="Register as Driver"
                onPress={() => navigation.navigate("DriverRegistration", {language:"french"})}
            />
            <Button
                title="Register as Passenger"
                onPress={() => navigation.navigate("PassengerRegistration", {language:"english"})}
            />
        </View>
        
    )
}
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, ToastAndroid } from 'react-native'

const HomeScreen = () => {
    //declaring the use state for data and setData
    //declaring the server's  IP adress by default
    const adresseIP = `http://192.168.1.64`
    const portNumber = `8000`
    const server = `${adresseIP}:${portNumber}`
    const navigation = useNavigation();
    const [data, setData] = useState(server);

    //function function makes a GET request to a server
    //navigation to navigate to the "Record" view
    const fetchserver = async () => {
        try {
            fetch(server, {
                method: 'GET',
            })
                //toast message to indicate a successful connection
                .then(response => {
                    ToastAndroid.show('Connected', ToastAndroid.SHORT);

                    navigation.navigate('Record');

                })

        }
        catch (error) {
            console.log(error);
        }

    }
    //returns input fields  to set the data and button to initiate the fuction
    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Text style={styles.connectInputText}>Connect to IP Address:</Text>
                <TextInput
                    style={styles.input}
                    value={adresseIP}
                    onChangeText={data => setData(data)}
                />
                <Text style={styles.connectInputText}>Port:</Text>
                <TextInput
                    style={styles.input}
                    value={portNumber}
                    onChangeText={data => setData(data)}
                />


                <Button style={styles.btn} title="Connect" onPress={fetchserver} />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    connectInputText: {
        textAlign: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    btn: {
        height: 40,
        width: 20,
    }
})

export default HomeScreen


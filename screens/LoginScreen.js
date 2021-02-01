import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Input , Image } from 'react-native-elements';
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace('Home')
            }
        });
        
        return unsubscribe;

    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
    }
    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container} key>
            <StatusBar style="light" />
            <Image 
                style={{width: 200, height: 200}}
                source={{uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'}}
            />
            <View style={styles.inputContainer} >
                <Input 
                    placeholder="Email" 
                    autoFocus type="Email" 
                    value={email} 
                    onChangeText={text => setEmail(text)} 
                />

                <Input 
                    placeholder="Password" 
                    secureTextEntry 
                    type="Password"
                    value={password} 
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <Button 
                containerStyle={styles.button}
                onPress={signIn} 
                title='Login' />

            <Button 
                onPress={() => navigation.navigate('Register')}
                containerStyle={styles.button} 
                type="outline"
                title='Register' />

            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        padding: 10,
    },
    inputContainer: {},
    button: {
        width: 200,
        marginTop: 10,
    },
})
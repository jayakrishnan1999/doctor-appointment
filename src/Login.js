import React, { useState } from 'react';
import { View, Text, TextInput, Touchable, styles, StyleSheet, TouchableOpacity, Button, Alert ,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const Login = props => {
  const navigation = useNavigation();
  // username.clear();
  // password.clear();
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')

  const [uid, setUid] = useState('')
  const [passid, setPassid] = useState('')

  const getData = async () => {
    try {
      AsyncStorage.getItem('Details').then(value => {

        if (value != null) {

          const user = JSON.parse(value);
          setUid(user.uname)
          setPassid(user.pass)
          console.log(uid);
          console.log(passid);
        }
      })
    } catch (error) {
      console.log(error)
    }
    if (username == uid && password == passid) {
      navigation.navigate("Splash")
    }
    else if (username.length == 0 && password.length == 0) {
      Alert.alert("Username and Password is required")
    }
    else if (username.length == 0) {
      Alert.alert("Username is required enter your username")
    }
    else if (password.length == 0) {
      Alert.alert("Password is required enter your password")
    }
    else {
      Alert.alert("Invalid username or password")
    }
  }
  // const [email, setemail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigation = useNavigation(Splash);
  // const  saveusernamepass=async ()=> {
  //   const email = await AsyncStorage.getItem('email');
  //     const password =await AsyncStorage.getItem('password');
  //     if(email!=null || email!==undefined || email!==''){
  //       navigation.navigate('Splash')
  //     }
  //     else{
  //       navigation.navigate('login')
  //     }
  //   try{

  //       await AsyncStorage.setItem('email',username);
  //       await AsyncStorage.setItem('Password',password);
  //   } catch (e){
  //       console.log(e)
  //   }
  // };

  //   // showAlert=(email,password)=>{
  //   //     if(email=="Admin"&&password=="Kgisl"){
  //   //       props.navigation.navigate("Splash")
  //   //     }
  //   //     else{
  //   //       alert('Invalid username or password')
  //   //     }
  //   //   }


  return (
   
    <Background>
       <TouchableWithoutFeedback 
   
       
       onPress={()=>{Keyboard.dismiss()}}>
      <View style={{ alignItems: 'center', width: 400 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 100,
            // borderBottomLeftRadius:900,
            paddingTop: "5%",
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="username"
            keyboardType={'username'}
            value={username}
            onChangeText={(regname) => setusername(regname)}
          />

          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(regname) => setPassword(regname)} />

          <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>



          <Btn textColor={'white'} bgColor={darkGreen} btnLabel="Login" Press={getData} />


          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Background>
   
  );
};

export default Login;
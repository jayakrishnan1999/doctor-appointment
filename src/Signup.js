import { View, Text, Touchable, TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Success from './Screens/success';

const Signup = props => {
  const [username, setusername] = useState('');
  const [number, setnumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConformPassword] = useState('');

  const navi = useNavigation();
  const Data = async () => {
    if (username.length == 0 || number.length == 0 || password.length == 0 || confirmPassword.length == 0) {
      Alert.alert("Enter Valid details")
      navi.navigate('Signup') 
    }
    // else if (password == confirmPassword) {
    //   Alert.alert("Password matched")
    //   // navi.navigate('Signup')  
    // }
    else if (password != confirmPassword) {
    Alert.alert("Password doesn't match")
    navi.navigate('Signup')  
    }
    // else if(number.length==10){
    //  Alert.alert("validnumber")
    // //  navi.navigate('Signup')  
    // }
    else if(number.length<10||number.length>10){
      Alert.alert("invalidnumber")
      navi.navigate('Signup')  
     }
    else {
      Alert.alert("Account Created")

    }
    try {
      const obj = {
        uname: username,
        num: number,
        pass: password,
        cnfpass: confirmPassword
      }
      await AsyncStorage.setItem('Details', JSON.stringify(obj));
      console.log(obj);
    }
    catch (error) {
      console.log(error)
    }
   

      
    }
  
  return (
    <Background>
       <TouchableWithoutFeedback 
   
       
   onPress={()=>{Keyboard.dismiss()}}>
      <View style={{ alignItems: 'center', width: 390 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="username" value={username} onChangeText={txt => setusername(txt)} />
          {/* <Field placeholder="Last Name" value={lastname} onChangeText={txt => setlastname(txt)} /> */}
          {/* <Field
              placeholder="Email"
              keyboardType={'email-address'} value={email} onChangeText={email => setEmail(email)} /> */}
          <Field placeholder="Contact Number" keyboardType={'number'} value={number} onChangeText={number => setnumber(number)} />
          <Field placeholder="Password" secureTextEntry={true} value={password} onChangeText={pass => setPassword(pass)} />
          <Field placeholder="Confirm Password" secureTextEntry={true} value={confirmPassword} onChangeText={pass => setConformPassword(pass)} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              and {" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>
          {/* <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
             
              Press={() => {
               
            
              }}
            /> */}
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              Data()
              navi.navigate('Login');
            }
              // Press={() => {
              //   alert('Account created');
              //   props.navigation.navigate('Login');
              // }}
            }
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Background>
    
  );
};

export default Signup;
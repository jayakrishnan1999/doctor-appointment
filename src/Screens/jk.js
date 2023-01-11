import React,{useEffect, useState} from "react"; 
import { View,Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function ViewScreen(){
    const [patientname, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [date, setDate] = useState('');
    const [mnumber, setNumber] = useState('');

    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
        try{
            AsyncStorage.getItem('AppointmentDetails').then(value=>{
                if(value != null){
                    const data=JSON.parse(value)
                    setPatientName(data.ptname)
                    setAge(data.age)
                    setWeight(data.wt)
                    setHeight(data.ht)
                    setDate(data.dt)
                    setNumber(data.mn)
                }
            })
        }catch(error){
            console.log(error)
        }
    }
    return(
        <View>
            <Text>
                ViewScreen
            </Text>
        </View>
    )
}
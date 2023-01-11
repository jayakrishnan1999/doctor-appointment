import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataTable } from 'react-native-paper';

 export default function ViewScreen(){
    const [patientname, setPatientName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [date, setDate] = useState()
    const [mnumber, setNumber] = useState()

    
    useEffect(()=>{
        getData();
    }, [])
    const getData = async () => {
        try {
            AsyncStorage.getItem('AppointmentDetails').then(value => {
                console.log("AppointmentDetails==");
                console.log(value);
                if (value != null) {
                    console.log(value);
                    const user = JSON.parse(value);
                    setPatientName(user.ptname)
                    setAge(user.age)
                    // setGender(us.g)
                    setHeight(user.ht)
                    setWeight(user.wt)
                    setDate(user.dt)
                    setNumber(user.mn)
                    console.log(user)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
        useEffect(()=>{
         getgender();  
          },[])
            const getgender =()=>{    
              try{
                AsyncStorage.getItem('Values')
                .then(value =>{

                  if(value !=null){        
                 const user=JSON.parse(value);        
                   setGender(user);                      
                  }        
                })        
              }catch(error){       
                console.log(error)   
              }
            }
    


 
    return (
        // <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'lightblue' }}>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>patientname:{patientname}</Text>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>age:{age}</Text>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>gender:{gender}</Text>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>weight:{weight}</Text>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>height:{height}</Text>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>date:{date}</Text>
        //     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>number:{mnumber}</Text>
        // </View>
        <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>ptname</DataTable.Title>
        <DataTable.Title>age </DataTable.Title>
        <DataTable.Title>gender</DataTable.Title>
        <DataTable.Title>weight</DataTable.Title>
        <DataTable.Title>height </DataTable.Title>
        <DataTable.Title>number</DataTable.Title>
        <DataTable.Title>date</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>{patientname}</DataTable.Cell>
          <DataTable.Cell>{age}</DataTable.Cell>
          <DataTable.Cell>{gender}</DataTable.Cell>
          <DataTable.Cell>{weight}</DataTable.Cell>
          <DataTable.Cell>{height}</DataTable.Cell>
          <DataTable.Cell>{mnumber}</DataTable.Cell>
          <DataTable.Cell>{date}</DataTable.Cell>
        </DataTable.Row>
        
        
      </DataTable>
       
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent:'space-between',
    
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
    
  },
});



// import React,{useEffect, useState} from "react"; 
// import { StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { DataTable } from 'react-native-paper';


// export default function ViewScreen(){
//     const [patientname, setPatientName] = useState('');
//     const [age, setAge] = useState('');
//     const [weight, setWeight] = useState('');
//     const [height, setHeight] = useState('');
//     const [date, setDate] = useState('');
//     const [mnumber, setNumber] = useState('');

//     useEffect(()=>{
//         getData();
//     },[])

//     const getData=async()=>{
//         try{
//             AsyncStorage.getItem('AppointmentDetails').then(value=>{
//                 if(value != null){
//                     const data=JSON.parse(value)
//                     setPatientName(data.ptname)
//                     setAge(data.age)
//                     setWeight(data.wt)
//                     setHeight(data.ht)
//                     setDate(data.dt)
//                     setNumber(data.mn)
//                 }
//             })
//         }catch(error){
//             console.log(error)
//         }
//     }
//     return(
//         // <View>
//         //     <Text>
//         //         ViewScreen
//         //     </Text>
//         // </View>
//         <DataTable style={styles.container}>
//         <DataTable.Header style={styles.tableHeader}>
//           <DataTable.Title>Name</DataTable.Title>
//           <DataTable.Title>Favourite Food</DataTable.Title>
//           <DataTable.Title>Age</DataTable.Title>
//         </DataTable.Header>
//         <DataTable.Row>
//           <DataTable.Cell>Radhika</DataTable.Cell>
//           <DataTable.Cell>Dosa</DataTable.Cell>
//           <DataTable.Cell>23</DataTable.Cell>
//         </DataTable.Row>
    
//         <DataTable.Row>
//           <DataTable.Cell>Krishna</DataTable.Cell>
//           <DataTable.Cell>Uttapam</DataTable.Cell>
//           <DataTable.Cell>26</DataTable.Cell>
//         </DataTable.Row>
//         <DataTable.Row>
//           <DataTable.Cell>Vanshika</DataTable.Cell>
//           <DataTable.Cell>Brownie</DataTable.Cell>
//           <DataTable.Cell>20</DataTable.Cell>
//         </DataTable.Row>
//         <DataTable.Row>
//           <DataTable.Cell>Teena</DataTable.Cell>
//           <DataTable.Cell>Pizza</DataTable.Cell>
//           <DataTable.Cell>24</DataTable.Cell>
//         </DataTable.Row>
//       </DataTable>
//     )
// }


  
// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//   },
//   tableHeader: {
//     backgroundColor: '#DCDCDC',
//   },
// });
import React, { useRef,useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TextInput, Alert,TouchableWithoutFeedback,Keyboard } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import "react-datepicker/dist/react-datepicker.css";
import {Linking} from 'react-native'
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-datepicker";



const Book = () => {
    const [patientname, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [date, setDate] = useState('');
    const [mnumber, setNumber] = useState('');

    const [username] = useState()
    // const [valid, setValid] = useState(true);
    // const [startDate, setStartDate] = useState(new Date());
   
    const drawer = useRef(null);
    const [isSelected, setSelection] = useState(true);
    const [isnotSelected, setnotSelection] = useState(true);

    const [drawerPosition, setDrawerPosition] = useState("left");
    const [text, onChangeText] = useState();
    const [number, onChangeNumber] = useState();
    const handleDateChange = value => {
        if (value !== undefined) {
            console.log(moment(value, "MM/DD/YYYY", true).isValid());
            console.log(new Date(value));
            if (moment(value, "MM/DD/YYYY", true).isValid()) {
                setValid(true);
            } else {
                setValid(false);
                setStartDate(null);
            }

            // let date = moment(value);
            // console.log(valid);
            // console.log(date);
        }
        // else {
        //     console.log(value);
        // }
    };
    const Data = async () => {
        if (patientname.length == 0 || age.length == 0 || weight.length == 0 || height.length == 0 || mnumber.length == 0 || date.length == 0) {
            Alert.alert("Enter Valid details")

        }
        else if(mnumber.length<10||mnumber.length>10){
            Alert.alert("invalidnumber")
             
           }
       
        else {
            Alert.alert("Account Created")
            //    navigate.navigate('pending')
        }
    
        try {
            const obj = {

                ptname: patientname,
                age: age,
                g: gender,
                wt: weight,
                ht: height,
                dt: date,
                mn: mnumber,

            }
            await AsyncStorage.setItem('AppointmentDetails', JSON.stringify(obj));
            console.log(obj)
        }
        catch (error) {
            console.log(error)
        }

        console.log(patientname);
        console.log(age);
        console.log(gender);
        console.log(weight);
        console.log(height);
        console.log(date);
        console.log(mnumber);

    }
    const call = async () => {
        Linking.openURL(`tel:${9677909185}`)
    }

    const navigate = useNavigation();


    // const check = () => {
    //     if (patientname.length == 0 || age.length == 0 || weight.length == 0 || height.length == 0 || mnumber.length == 0 || date.length == 0) {
    //         Alert.alert("Enter Valid details")

    //     }

    //     else if (number != 10) {
    //         Alert.alert("invalid number")
    //         // navi.navigate('book')
    //     }

    //     else if (weight.length != 0) {
    //         Alert.alert("invalidnumber")
    //         // navi.navigate('book')
    //     }
    //     else {
    //         Alert.alert("Account Created")
    //         //    navigate.navigate('pending')
    //     }
    // }
    const [gender, setGender] = useState([
        {
            id: '1',
            label: 'male',
            value: 'Male'
        },
        {
            id: '2',
            label: 'female',
            value: 'FeMale'
        }
    ])
    const onPressRadioButton = (radioButtonsArray) => {

        if (Boolean("selected value=", radioButtonsArray) && Array.isArray(radioButtonsArray) && radioButtonsArray.length != 0) {
            const selectedOption = radioButtonsArray.find(element => Boolean(element?.selected));
            const clickvalues = JSON.stringify(selectedOption.value)
            AsyncStorage.setItem("Values", clickvalues)
            setGender(radioButtonsArray);
        }
        else {
            setGender([]);
        }
    }
    const navigationView = () => (

        <View style={[styles.container, styles.navigationContainer]}>
            <Text>Welcome{username}</Text>
            <Text style={styles.paragraph}>Enter your number</Text>
            <TextInput
                style={styles.input}
                placeholder="mobilenumber"
                value={number}
                keyboardType='numeric'
            />
            {/* <Button
                title="Call"
              
                onPress={() => alert('Calling your number', drawer.current.closeDrawer())}
            /> */}
             <Button
                title="Call"
              
                onPress={()=>alert('Calling your number',call() )}
            />
        </View>


    );


    return (
        <TouchableWithoutFeedback 
   
       
        onPress={()=>{Keyboard.dismiss()}}>
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}
        >
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Welcome to Appointment booking
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="patientname"
                    value={text}
                    onChangeText={patientname => setPatientName(patientname)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="age"
                    value={number}
                    keyboardType='numeric'
                    onChangeText={number => setAge(number)}
                />
                <View style={styles.container}>
                    {/* <View style={styles.checkboxContainer}>
                        <Text style={styles.label}>Gender</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <CheckBox
                            value={isnotSelected}
                            onValueChange={setnotSelection}
                            style={styles.checkbox}
                        />

                    </View> */}
                    {/* <Text> {isSelected ? "male" : "female"}</Text> */}

                </View>
                <View>
                    <Text>Gender:</Text>
                    <RadioGroup
                        radioButtons={gender}
                        onPress={onPressRadioButton}
                        layout='row'
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="weigth in kg"
                    value={weight}
                    keyboardType='numeric'
                    onChangeText={number => setWeight(number)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="height in cm"
                    value={height}
                    keyboardType='numeric'
                    onChangeText={number => setHeight(number)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="mobilenumber"
                    value={mnumber}
                    keyboardType='numeric'
                    onChangeText={number => setNumber(number)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="mm/dd/yyyy"
                    value={number}
                    onChangeText={txt => setDate(txt)}
                />
                

                {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
                <View style={{ marginBottom: 10 }}>
                    {/* <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"

                /> */}
                    <View style={{ marginTop: 10 }} >
                        <Button
                            title="save"

                            onPress={Data}
                        /></View>
                </View>
                {/* <View style={{ marginTop: 10, marginBottom: 10 }} >
                    <Button
                        title="check"

                        onPress={check}
                    /></View> */}

                <Button

                    title="Emergency Call"
                    onPress={() => drawer.current.openDrawer()}
                />


            </View>
        </DrawerLayoutAndroid>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center",
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});

export default Book;
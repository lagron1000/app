import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, AppRegistry } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Training = () => {

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <Button title="My Profile" />;
//     }
//     return (<View><Text>You are unregistered</Text><Button title="Register" onPress={goToRegister} /></View>);
//   }
function Train(props){
    const questions = [
        {
            question : "Me, to my family",
            choices : ["Good", "Bad", "Ugly"]
        }
    ];
    const choices =[];
    for (let i in questions[0].choices) {
        choices.push(
        <View key={i}>
          <Button title={questions[0].choices[i]} />
        </View>
        )
    }
    return (
        <View>
            <Text>{questions[0].question}</Text>
            { choices }
        </View>
    )
}
   return (
    <View style={styles.container}>
        <Train/>
    </View>
   )
}

const styles = StyleSheet.create({
   container: {
     justifyContent: 'center',
     marginTop: 50,
     padding: 20,
     backgroundColor: '#ffffff',
   },
   text:{
   }
 });

export default Training
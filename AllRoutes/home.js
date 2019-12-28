import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, AppRegistry } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Home = () => {

const Logged = false;
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Button title="My Profile" />;
    }
    return (<View><Text>You are unregistered</Text><Button title="Register"  onPress={Actions.register} /></View>);
  }
   return (
    <View style={styles.container}>
      <Button onPress={Actions.training} title="Start Training"/>
      <Greeting isLoggedIn={Logged} />
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

export default Home
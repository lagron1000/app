import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, AppRegistry } from 'react-native';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native'; 


const Register = () => {
   const goToAbout = () => { 
      Actions.about()
   }
   const Form = t.form.Form;
   const User = t.struct({
   name: t.String,
   // age: t.Number,
   // league: t.String,
   // city : t.String,
   // club :t.String,
   // phone : t.Number
   
});
     const addUser =() =>{
       const user = this._form.getValue(); 
       console.log(user);
     } 
   return (
    <View style={styles.container}>
      <Form ref={c => this._form = c} type={User} />
      <Button title="Submit" onPress={addUser}/>
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

export default Register
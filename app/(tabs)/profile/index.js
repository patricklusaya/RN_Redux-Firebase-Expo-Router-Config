import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


const Profile = () => {
 const [fullName, setFullName] = useState('');


 
 const handleSignUp = () => {
   
};


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Name</Text>
    <TextInput
    style ={{backgroundColor:'lightgray', color:"black", width:200, padding:10, borderRadius:20, borderWidth:1, marginTop:10}}
    value={fullName}
    onChangeText={setFullName}
    
    />

    <Button onPress={handleSignUp} title='Submit' />

    </View>
  )
}

export default Profile
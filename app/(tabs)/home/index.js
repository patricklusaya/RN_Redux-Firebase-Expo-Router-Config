import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserData } from "../../../redux/actions/AppActions";
import { useEffect } from "react";

const HomeScreen = () => {

  const dispatch = useDispatch();
   
  const [fullName, setFullName] = useState("");

  const [state, setState] = useState({
    isUserSaved:false
  });


  const appState = useSelector((state) => state.app);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      isUserSaved:appState.isUserSaved
    }));
  }, [appState ]);


  const sendData = () =>{

    if (!fullName) {
       return Alert.alert("Fill name");
    }

    dispatch(sendUserData(fullName))

  

  }



const renderMessage = () =>{

  if (state.isUserSaved) {

    return (
      <Text>User saved succesfully</Text>
    )
    
  }


}

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name</Text>
      <TextInput
        style={{
          backgroundColor: "lightgray",
          color: "black",
          width: 200,
          padding: 10,
          borderRadius: 20,
          borderWidth: 1,
          marginTop: 10,
        }}
        value={fullName}
        onChangeText={setFullName}
      />

      <Button onPress={sendData} title="Submit" />

      {renderMessage()}

    </View>
  );
};

export default HomeScreen;

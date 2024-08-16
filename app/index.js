import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Index = () => {

    const navigateHome = ( ) =>{
        return (
            <Redirect href='/home'   />
        )
    }
  return (
    <View>
    {navigateHome()}
    </View>
  )
}

export default Index
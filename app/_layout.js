import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Stack } from "expo-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../redux/index";
import { isFirebaseInitialized } from "../firebaseConfig"

const store = configureStore({
  reducer: rootReducer,
});

const RootLayout = () => {
  const createMainRouter = () => {
    return (
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    );
  };

  if (!isFirebaseInitialized) {
    return (
      <View>
        <Text>Firebase is not initialized</Text>
      </View>
    );
  }
  return <View style={styles.container}>{createMainRouter()}</View>;
};



const App = () => {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

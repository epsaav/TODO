import React from "react";
import {StyleSheet,View,SafeAreaView,Text} from "react-native";
import TodoForm from "./components/TodoForm";

export default function App(){
  return (
    <SafeAreaView>
      <TodoForm />
    </SafeAreaView>
  )
}
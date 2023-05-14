import React, {useState} from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
  } from "react-native";

function Form({addTodoFunc}) {
const [newTodo, setNewTodo] = useState("")

  return (
    <View>
 <TextInput 
 placeholder='new Todo'
 onChangeText={(value) => {
    setNewTodo(value)
   
 }}
 style={styles.input}
 />
 <Button 
 onPress={() => {
    addTodoFunc(newTodo)
    setNewTodo("")
 }}

title='Add todo'
 />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderBottomWidth:2,
        borderRadius: 10,
        marginVertical: 20,
        borderRadius: 20,
        padding: 10
    }
    
})
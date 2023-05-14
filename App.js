import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {

  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Todo from "./components/Todo";
import Form from "./components/Form";
// import Form from "./components/Form";



export default function App() {
const [todos, setTodo] = useState([
  {
    task:"cooking food",
    key: 1
  },
  {
    task:"Wahing Cloths",
    key: 2
  },
  {
    task:"Reading book",
    key: 3
  },
])

const handlePress = (key) => {
  console.log(key)
  setTodo((prevTodo) => {
     return  prevTodo.filter(item => item.key !== key)
  })
 }

 const addTodoFunc = (newTodo) => {
  if(newTodo.length < 3){
   return Alert.alert("Ooops", " Todo must be at least 3 characters long", [{
      text:"Close Dialogue",
      onPress: () =>{
        console.log("item closed")
      }
    }])

  }
  setTodo((prevTodo) => {
  return  [{
      task: newTodo,
      key:prevTodo.length + 1
    }, ...prevTodo]
  })
 }
  return (
 <TouchableWithoutFeedback onPress={() => {
 Keyboard.dismiss()
 }}>
     <View style={styles.container}>
     <Text  style={styles.header}>
      Todo List
     </Text>
  <View>
    <Form addTodoFunc = {addTodoFunc} />
  </View>


  <FlatList
  data={todos}
  renderItem={({item}) => {
   return <Todo handlePress = {handlePress} item={item} />
  }}
  />
 
    </View>
 </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20
  },

  item: {
    padding: 10,
    borderColor: "black",
    borderRadius: 10,
    color: "white",
    backgroundColor: "purple",
    marginTop: 20,
    height: 70,
  },
  header:{
    backgroundColor:"coral",
    textAlign:"center",
    fontSize:20,
    padding:10,
    color:"white"
  }
});

import React, {useState, useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import { GetCharacters } from './api/GetCharacters';


export default function TodoForm(){

    const [todos, setTodos] = useState([]);
    const[characterList,setCharactersList]= useState([]);
    const[inputValue,setInputValue]= useState('');
    

  
const addTodo = ()=>{
    
    const todolino = {
        id : Math.floor(Math.random()* 10000),
        Task: inputValue
    }
    const newTodos = [todolino, ...todos];
setTodos(newTodos);
}

/*useEffect(()=> {//console.log(todos)
console.log(characterList) 
},[todos])*/

useEffect(()=>{
    GetCharacters().then((response)=>setCharactersList(response.results));
},[])

/*useEffect (()=>{
    //getPeople(page).then ((datos)=> setPeople(datos.results));
    getPeople().then((datos)=> setPeople(datos.results));
},[])*/

useEffect(() => {
   /* fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => setCharactersList(json.results))
      .catch((error) => console.error(error))
      .finally(() => set(false));*/
  console.log(characterList)
  }, [todos]);
    
    return(
        <> 
         <View style={styles.viewInput}>
            <TextInput onChange={(e) => setInputValue(e.nativeEvent.text)}placeholder='Add a TODO' style={styles.input}/>
            <View> 
                    <TouchableOpacity   onPress={addTodo}>
                        <Text>ADD</Text>
                    </TouchableOpacity>
            </View>
       </View>
       <View>
       {characterList.map((character)=>(
             <Text style={color="black"} key={character.name}>{character.name}hola</Text>
       ))} 
    </View>
        </>
      
    )
    }

const styles = StyleSheet.create({
input: {
width:'50%',
height: 30,
backgroundColor: "#F9F6F6"
},
viewInput: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
}
}
)

import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import db from './firebase';
import './App.css';

function App() {
  //state (short term memory)
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when app loads, need to listen to db and update ui when they are added or removed
  useEffect(() => {
    // When app loads this code runs
   db.collection('text').onSnapshot(snapshot => {
     console.log(snapshot.docs.map(doc => doc.data()));
     //setTodos(snapshot.docs.map(doc => doc.data().todo))
   })
  }, []);


  const addTodo = (event) => {
    //stop REFRESH
    event.preventDefault();
    // This will fire when we click the button
    setTodos([...todos, input]);
    
    //Reset field to blank
    setInput(''); 


  }


  return (
    <div className="App">
      <h1>:⌚Welcome to Your TODO App With React :⌚</h1>
      <h2 style={{color: "lime"}}>Time is on your side</h2>

      <form>


        <FormControl>
          <InputLabel> ✅ Write  A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" 
          color="primary">
            Add Event
        </Button>
        
        
      </form>
      
      <ul>
        {todos.map(todo => (

          <Todo text={todo}/>
        
        ))}
      </ul>
    </div>
  );
}

export default App;

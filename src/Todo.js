import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'


// This is the todo component

function Todo(props) {
  return (

    <List className='todo__list'>
        <ListItem>
            
            <ListItemText primary={props.text} secondary="Dummy Deadline "></ListItemText>

        </ListItem>
    </List>
    
  )
}

export default Todo
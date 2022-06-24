import React, {useState} from 'react'
import { AddCircleRounded } from '@mui/icons-material'
import {Input, InputAdornment, IconButton, Container } from '@mui/material'



const ListForm = ({allItems,setAllItems})=> {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const [element, setElement] = useState({
    value: "",
    checked: false,
    date: ""
  });

  return (
    <Container style={{ backgroundColor: "8F00FF" }}>
        <Input
            fullWidth
            value={element.value}
            onChange={(e) => {
                setElement({ ...element, value: e.target.value, date:`${today}` });
            }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={() => {
                        setAllItems([...allItems, element]);
                        setElement({ ...element, value: "" });
                        }}
                        edge="end"
                    >
                        <AddCircleRounded />
                    </IconButton>
                </InputAdornment>
           } 
        />
    </Container>
    
  );
}

export default ListForm
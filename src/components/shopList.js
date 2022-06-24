import React, { useEffect, useState } from 'react'
import ListForm from './listForm'
import { Container, Typography } from '@mui/material'
import { ShopCart } from './ShopCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ShopList = () => {
    const [allItems,setAllItems] = useState([])
    const [itemCount,setItemCount] = useState(0)
    useEffect(()=>{   
         setItemCount(allItems.length); 
	    // setItemCount(allItems.length);  
    },[allItems])

    const deleteItem = (itemid) => {
        setAllItems(allItems.filter((item, index) => itemid !== index ))
    }

    const updateItem = (itemid, value) => {
        let temp = allItems
        temp[itemid] = {...allItems[itemid], checked: value}
        setAllItems([...temp])
    }
    const updateItems = (items) =>{
        setAllItems([...items])
    }


  return (
    <Container style={{ backgroundColor: "#F4F6F6" }}>
        <br/>
        <Typography variant='h4'>
            shopping List
        </Typography>
        
        <AddShoppingCartIcon className='position'></AddShoppingCartIcon> {itemCount}
        <br/>
        
        <ShopCart
            allItems={allItems}
            deleteItem={deleteItem}
            updateItem={updateItem}
            updateItems={updateItems}
        />
        <ListForm allItems={allItems} setAllItems={setAllItems}/>
    </Container>
    
  )
}

export default ShopList
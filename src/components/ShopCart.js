import { List, ListItem, Checkbox, ListItemIcon,
    ListItemText,
    IconButton,
    Typography,  } from '@mui/material'
import {makeStyles} from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect } from 'react'

const useStyles= makeStyles((theme) => ({
    primary: {
        textDecoration:"line-through"
    }
})) 

export const ShopCart = ({allItems,deleteItem, updateItem,updateItems})=>{
    const renderlist = (list) => {
        return list.map((item,index)=> {
                    let classesOverlined = item.checked ? classes.primary : null;
                    return (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    disableRipple
                                    onChange={(e)=> {
                                        if(e.target.checked){
                                            updateItem(index, true)
                                        } else {
                                            updateItem(index,false)
                                        }
                                    }}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.value}
                                classes={{ primary: classesOverlined }}
                            />
                            <IconButton
                                edge="end"
                                onClick={() => {
                                    deleteItem(index);
                                }}
                            >
                                <DeleteIcon color='secondary'/>
                            </IconButton>
                        </ListItem>
                    )
                })
    }
    var sortbyname =[]

    const ListedItem = (event) => {
        let id = event.target.id
        if(id === 'name-sort') {
            sortbyname = allItems.sort((a,b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0))
            console.log(sortbyname)
             updateItems(sortbyname)
            
        } 
        else if(id === 'date-sort') {
            const sortbyDate= allItems.sort((a, b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()))
           updateItems(sortbyDate)
           return
        }
    }



    const classes = useStyles()
    return (
        <>
            <List>
                <br/>
                <Typography>DONT FORGET TO BUY</Typography>
                <br/>
                <button onClick={ListedItem}  id={'name-sort'}>
                    sortbyname
                </button>
                <button onClick={ListedItem} id={'date-sort'}>
                    sortbyDate
                </button>
                
                {renderlist(allItems)}
                
            </List>
        </>
    )
}
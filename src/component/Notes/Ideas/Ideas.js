import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';


const Ideas = ({description}) => {
  return (
    <div>
       <ul>
        <li style={{marginTop: "5px"}}>{description}</li>
      </ul>
      <div className='buttonnotes'>
      <Button variant="contained" style={{background: "red"}}>
        حذف
        <DeleteIcon  style={{paddingRight: "5px"}}/>
      </Button>
      <Button variant="contained" style={{background: "primary" , marginRight: '10px'}}>
        تعديل
        <EditIcon  style={{paddingRight: "5px"}}/>
      </Button>
      <Button variant="contained" style={{background: "green" , marginRight: '10px'}}>
        منجز
        <CheckCircleIcon  style={{paddingRight: "5px"}}/>
      </Button>
      <Button variant="contained" style={{background: "grey" , marginRight: '10px'}}>
        غير منجز
        <HighlightOffIcon  style={{paddingRight: "5px"}}/>
      </Button>
      </div>
    </div>
  )
}

export default Ideas

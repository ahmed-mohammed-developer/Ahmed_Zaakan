import './Notes.css'
import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';






const Notes = () => {
  return (
    <div className='note'>
       <CssBaseline />
      <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom className='titlenote'>
        المفكرة :
      </Typography>
      
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div>
        <TextField
          id="filled-multiline-static"
          multiline
          rows={4}
          variant="filled"
          fullWidth
          className='rightsection'
        />
        <Stack spacing={2} direction="row">
        <Button
  variant="contained"
  style={{
    background: "#fff",
    color: "black",
    fontWeight: 400,
    border: "1px solid black"
  }}
>
    إضافة
</Button>

      </Stack>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="leftSection">
            <h3>الأفكار</h3>
      <ul>
        <li style={{marginTop: "5px"}}>مجرد أفكار</li>
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
      </Grid>
    </Grid>
    
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div className="checkSection">
        <h3>المنجزة</h3>
        <ul>
            <li>
                تم الإنجاز
            </li>
        </ul>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <div className="offSection">
        <h3>  غير المنجزة</h3>
        <ul>
            <li>
                تم الإنجاز
            </li>
        </ul>
        </div>
      </Grid>
    </Grid>
      </Container>
    </div>
  )
}

export default Notes

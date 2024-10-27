import './Notes.css'
import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';





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
        <div className='rightsection'>
            
        <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Normal"
            variant="filled"
            fullWidth
        />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* المحتوى الثاني */}
      </Grid>
    </Grid>
      </Container>
    </div>
  )
}

export default Notes

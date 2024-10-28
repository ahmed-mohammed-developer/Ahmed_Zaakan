import './Notes.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Ideas from './Ideas/Ideas';
// A random id is shown
import { v4 as uuidv4 } from 'uuid';

const noteslist = [
  { id: uuidv4(), description: 'قراءة كتاب', isCompleted: false },
  { id: uuidv4(), description: 'مذاكرة الإنجليزي', isCompleted: false }
];

const Notes = () => {
  const [addnote, setAddnote] = useState(noteslist);
  const [descriptioninput, setDescriptioninput] = useState("")

  // Function to add new note
  const handleAddnote = () => {
    const newNote = {
      id: uuidv4(),
      description: descriptioninput,
      isCompleted: false
    }
    setAddnote([...addnote, newNote])
    setDescriptioninput("")
  };

  const Ideasmap = addnote.map((n) => {
    return <Ideas key={n.id} description={n.description} />;
  });

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
                value={descriptioninput}
                onChange={(e) => {
                  setDescriptioninput(e.target.value)
                }}
              />
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  style={{
                    background: '#fff',
                    color: 'black',
                    fontWeight: 400,
                    border: '1px solid black'
                  }}
                  onClick={() => {
                    handleAddnote();
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
              {Ideasmap}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="checkSection">
              <h3>المنجزة</h3>
              <ul>
                <li>تم الإنجاز</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="offSection">
              <h3>غير المنجزة</h3>
              <ul>
                <li>تم الإنجاز</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Notes;

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
  const [descriptioninput, setDescriptioninput] = useState("");

  // Function to handle check click
  const handleCheckClick = (ideasId) => {
    const updatedisCoplet = addnote.map((t) => {
      if (t.id === ideasId) {
        if (!t.isCompleted) {
          t.isCompleted = true;
        }
      }
      return t;
    });
    setAddnote(updatedisCoplet);
  };

    // Function to handle Delelte click
    function handleCheckClickDeleteConfrim(ideasId){
     const updatedNotes = addnote.filter((t) => t.id !== ideasId)
      setAddnote(updatedNotes);
    }
    function handleCheckClickUpdateConfrim(ideasId, newDescription) {
      const updatedNotes = addnote.map((t) => {
        if (t.id === ideasId) {
          return { ...t, description: newDescription };
        }
        return t;
      });
      setAddnote(updatedNotes);
    }
    

  // Function to add new note
  const handleAddnote = () => {
    const newNote = {
      id: uuidv4(),
      description: descriptioninput,
      isCompleted: false
    };
    setAddnote([...addnote, newNote]);
    setDescriptioninput("");
  };

  // Maps for ideas and completed tasks
  const Ideasmap = addnote
    .filter(n => !n.isCompleted)
    .map((n) => {
      return <Ideas key={n.id} note={n} handleCheckClick={handleCheckClick} handleCheckClickDeleteConfrim={handleCheckClickDeleteConfrim} handleCheckClickUpdateConfrim={handleCheckClickUpdateConfrim} />;
    });

  const CompletedTasks = addnote
    .filter(n => n.isCompleted)
    .map((n) => {
      return <Ideas key={n.id} note={n} handleCheckClickDeleteConfrim={handleCheckClickDeleteConfrim} handleCheckClickUpdateConfrim={handleCheckClickUpdateConfrim}/>;
    });

  return (
      <div className='note'>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom className='titlenote'>
           قائمة المهام:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
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
                  onClick={handleAddnote}
                >
                  إضافة
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <div className="leftSection">
              <h3>المهام غير المنجزة</h3>
              {Ideasmap}
            </div>
          </Grid>
          </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <div className="checkSection">
              <h3>المهام المنجزة</h3>
              <ul>
                {CompletedTasks}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Notes;

import React, { useEffect, useState } from 'react'

import { Paper, Grid } from '@mui/material';
import { Container } from '@mui/system';

import NoteCard from '../common/card';

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('/notes', {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => {
        console.log("Error--", error)
      })
  }, [])

  const handleDelete = async (id) => {
    await fetch('/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter((note) => note._id !== id)
    setNotes(newNotes)
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (<Grid item xs={12} sm={6} md={3} key={note.id}>
          <NoteCard note={note} handleDelete={handleDelete} />
        </Grid>))}
      </Grid>
    </Container>)
}

export default Notes
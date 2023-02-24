import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControlLabel, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';

import SendSharpIcon from '@mui/icons-material/SendSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

import './create.css'


const Create = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todo')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setDetailsError(false)
    setTitleError(false)
    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {
      console.log("Title :- ", title);
      console.log('Details :- ', details);
      console.log('Category :- ', category);
      fetch('/notes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category })
      }).then(() => {
        navigate('/')
      }).catch((error) => {
        console.log("Error--", error)
      })
    }

  }
  return (<Container>
    <Typography
      variant='h6'
      component='h2'
      color='textSecondary'
      gutterBottom
    >
      Create a New Note
    </Typography>

    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField
        label='Note Title'
        variant='outlined'
        color='secondary'
        fullWidth
        required
        className='text-field-dilip'
        onChange={(e) => setTitle(e.target.value)}
        error={titleError}
      />
      <TextField
        label='Detail'
        variant='outlined'
        color='secondary'
        multiline
        rows={5}
        fullWidth
        required
        className='text-field-dilip'
        onChange={(e) => setDetails(e.target.value)}
        error={detailsError}
      />
      <FormControl className='text-field-dilip'>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value='todos' control={<Radio />} label='To-Do' />
          <FormControlLabel value='money' control={<Radio />} label='Money' />
          <FormControlLabel value='reminders' control={<Radio />} label='Reminder' />
          <FormControlLabel value='works' control={<Radio />} label='Work' />
        </RadioGroup>
      </FormControl>
      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log('ypu clicked me...')}
        startIcon={<SendSharpIcon />}
        endIcon={<KeyboardArrowRightSharpIcon />}
      >
        SUBMIT
      </Button>
    </form>

  </Container>)
}

export default Create
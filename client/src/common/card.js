import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          title={note.title}
          subheader={note.category}
          action={
            <IconButton onClick={() => handleDelete(note._id)}>
              <DeleteOutlinedIcon color='error' />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
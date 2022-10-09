
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar
} from '@mui/material'
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './layOut.css'
const paperWidth = {
  width: 240
}
const menuItems = [
  {
    text: 'My Notes',
    icon: <SubjectOutlinedIcon color='secondary' />,
    path: '/'
  },
  {
    text: 'Create Note',
    icon: <AddCircleOutlineOutlinedIcon color='secondary' />,
    path: '/create'
  }
]
const LayOut = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <div className='layout-container'>
      <AppBar className='app-bar-class' color='secondary'>
        <Toolbar className='app-bar-tool'>
          <Typography color='white'>
            Welcome to the Notes App
          </Typography>
          <Avatar>

          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className='drawer'
        anchor='left'
      >
        <div>
          <Typography variant='h6' color='secondary'>
            Dilip Bhoi
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className='page'>
        {children}
      </div>
    </div>
  )
}

export default LayOut
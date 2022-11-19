
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
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
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
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
  const location = useLocation();

  const [showDrawer, setShowDrawer] = useState(false)
  const onClickMenu = () =>setShowDrawer(true)
  const onClickOptions = (item) => {
    navigate(item.path)
    setShowDrawer(false)
  }

  return (
    <div className='layout-container'>
      <AppBar className='app-bar-class' color='secondary'>
        <Toolbar className='app-bar-tool'>
          <MenuRoundedIcon className='menu_icon' onClick={onClickMenu}/>
          <Typography color='white'>
            Welcome to the Notes App
          </Typography>
          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='temporary'
        className='drawer'
        anchor='left'
        open={showDrawer}
        onClose={()=>setShowDrawer(false)}
      >
        <div>
          {/* <Typography variant='h6' color='secondary'>
            Dilip Bhoi
          </Typography> */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => onClickOptions(item)}
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
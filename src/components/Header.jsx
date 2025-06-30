import React from 'react'
import "../css/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AppsIcon from '@mui/icons-material/Apps';
import NotificationIcon from '@mui/icons-material/Notifications'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const signOut = () =>{
    auth.signOut().then(() => {
      dispatch(logout());
    })
  }

  return (
    <div className='header'>
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="/gmail.png" alt="" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder='Search null' />
        <ArrowDropDownIcon className="header__input" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoURL}/>

      </div>

    </div>
  )
}

export default Header
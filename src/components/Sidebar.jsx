import React from 'react'
import { Button, IconButton } from '@mui/material'
import "../css/Sidebar.css"
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star'
import SidebarOption from './SidebarOption';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import labelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from  '@mui/icons-material/LabelImportant'
import NoteIcon from '@mui/icons-material/Note'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/counter/MailSlice';




function Sidebar() {
  const dispatch = useDispatch();
  
  return (
    <div className='sidebar'>
      <Button 
      startIcon={<AddIcon fontsize="large" />}
      className="sidebar__compose"
      onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={labelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
    
      <div className='sidebar__footer'>
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
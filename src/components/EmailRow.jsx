import React from 'react'
import '../css/EmailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import StartBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutline'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from '../features/counter/MailSlice';

function EmailRow({ id, title, subject, description, time}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () =>{
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )
  }
  
  return (
    <div onClick={() => {
      openMail(); 
      navigate("/mail");
      }} className='emailRow'>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StartBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">
        {title}
      </h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">-
            {description}</span>
          </h4>
      </div>
      <div className="emailRow__time">
        {time}
      </div>
    
    </div>
  )
}

export default EmailRow
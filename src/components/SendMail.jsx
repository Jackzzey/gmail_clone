import React from 'react'
import '../css/SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/counter/MailSlice'
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'

function SendMail() {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const dispatch = useDispatch();
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      await addDoc(collection(db, 'emails'), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      dispatch(closeSendMessage());
    } catch (error) {}
  };

  return (
    <div className='sendMail'>
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())}
        className='sendMail__close'
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' type="email" placeholder='To' {...register("to", { required: true })}/>
        {errors.to && <p className='sendMail__error'>To is Required</p>}
        <input name='subject' type="text" placeholder='Subject' {...register("subject", { required: true })}/>
        {errors.subject && <p className='sendMail__error'>Subject is Required</p>}
        <input name='message' type="text" placeholder='Message' className='sendMail__message' {...register("message", { required: true })}/>
        {errors.message && <p className='sendMail__error'>Message is Required</p>}

        <div className="sendMail__options">
          <Button type="submit" className='sendMail__send'>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
import React from 'react';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SendMail from './components/SendMail';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/counter/MailSlice';
import { selectUser } from "./features/counter/userSlice";
import Login from './login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/counter/userSlice';
import { getRedirectResult } from "firebase/auth";


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          dispatch(login({
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          }));
        }
      })
      .catch((error) => {
        console.error("Redirect login error:", error);
      });

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }));
    }
    });

    return () => unsubscribe();
  }, [dispatch]);
  
  


  return (
    <Router>
      {user ? (
        <div className="App">
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;

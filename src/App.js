import React,{useState, useEffect} from 'react';
import Message from './Message';
import {Button} from '@material-ui/core';
import {FormControl, InputLabel, Input} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import './App.css';
import db from './firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username,setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>( {id:doc.id, message:doc.data()} ) ))
    })
  },[]);
  useEffect(()=>{
    setUsername(prompt('Please enter your name'));
  },[]);
  const sendMessage = (event)=>{
    event.preventDefault();

    db.collection('messages')
    .add({message:input,
          username: username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
    setInput('');
  }

  return (
    <div className="app">
      <img alt="" src="https://www.bing.com/th?id=AMMS_d682234ca450e69f1c2b3f29ae450359&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&cdv=1&pid=16.1" />
      <h1>Facebook Messenger app</h1>
      <p>welcome {username}</p>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input value={input} className="app__input"
           placeholder="enter a message ..."
           onChange={(e)=>setInput(e.target.value)} />
          <IconButton className="app__iconButton"
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary" onClick={(e)=>sendMessage(e)}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id,message})=>{
            return(
              <Message key={id} message={message} username={username}/>
            )
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;

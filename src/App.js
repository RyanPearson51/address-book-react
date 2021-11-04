import React, { useState, useEffect } from 'react';
import './App.css';
import Contacts from './components/Contacts'

const API_URL = 'https://randomuser.me/api?results=25';

function App() {

const [contacts, setContacts] = useState([])

useEffect(() => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => setContacts(data.results));
  console.log('i mounted')
}, [])



  return (
    <div className="App">
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;

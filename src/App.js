import React from 'react';
import logo from './logo.svg';
import './App.css';

import  Post from './components/Post'

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

let user = {
  name: "Anakin skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader"
}

let content = {
  message: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
}

let date = "26 февр."

function App() {

 


  return (
    <div className="App">
      <Post author ={user}  content ={content} date={date}/>
    </div>
  );
}

export default App;

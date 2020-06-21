import React from 'react';
import NavBar from "./components/NavBar"
import Heading from './components/Heading'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import GlobalProvider from './components/TasksContext'

function App() {
  return (
    <GlobalProvider>
      <NavBar/>
      <marquee >
           The navbar part is not completed yet but it will be completed very soon.This is just the initial release of my React Todo App.
      </marquee>
      <Heading/>
      <TaskList/>
      <Footer/> 
    </GlobalProvider>
  );
}

export default App;

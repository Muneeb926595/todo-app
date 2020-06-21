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
      <Heading/>
      <TaskList/>
      <Footer/> 
    </GlobalProvider>
  );
}

export default App;

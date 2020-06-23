import React from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/Pages/Home"
import Completed from "./components/Pages/Completed"
import Important from "./components/Pages/Important"
import GlobalProvider from './components/TasksContext'
import About from './components/Pages/About'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <GlobalProvider>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/completed" component={Completed}/>
          <Route exact path="/important" component={Important}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;

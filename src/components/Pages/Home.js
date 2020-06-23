import React from 'react';
import Heading from '../Heading';
import TaskList from '../TaskList';
import Footer from '../Footer';
function Home(){
    return (
        <div>
            <Heading head="Tasks"/>
            <TaskList/>
            <Footer/> 
        </div>
    )
}

export default Home
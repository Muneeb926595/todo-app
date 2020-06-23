import React from 'react';
import Heading from '../Heading';
import TaskList from '../TaskList';

function Completed(){
    return (
        <div>
            <Heading head="Completed"/>
            <TaskList id="completed"/>
        </div>
    )
}

export default Completed
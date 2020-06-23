import React from 'react';
import Heading from '../Heading';
import TaskList from '../TaskList';

function Important(){
    return (
        <div>
            <Heading head="Important"/>
            <TaskList id="important"/>
        </div>
    )
}

export default Important
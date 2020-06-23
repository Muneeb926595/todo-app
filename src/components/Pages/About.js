import React from 'react';
import Heading from '../Heading';
import '../../App.css';
function About(){
    return (
        <div>
            <Heading head="About Me"/>
            <p className="myIntro">My name is Muneeb ur Rehman and i am fresh graduated Arid Agriculture University student. This is a simple TODO app where you can add your daily basis tasks and keep their track. You can add as much as tasks as you want there is no limit. You can mark any task important to give them priority and you can also check the task as completed to make sure how much tasks you achieved per day. This is a pure react based project and used pure css for styling. The UI is very simple to use. Adding and removing a task is jus a single click away. I hope you enjoy while using this simple app.Stay tuned for more beautiful projects. I will be uploading one application per week. :)</p>
        </div>
    )
}

export default About
import React from 'react';
import '../NavBar.css'
import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div className='myNav'>
            <div className="logo">
                <h4>MyTODO</h4>
            </div>
            <div className="setNavWidth">
                <ul className="navUL">
                    <Link to="/"><li className="navItem">Tasks</li></Link>
                    <Link to="/completed"><li className="navItem">Completed</li></Link>
                    <Link to="/important"><li className="navItem">Important</li></Link>
                    <Link to="/about"><li className="navItem">About</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
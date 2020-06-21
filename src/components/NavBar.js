import React from 'react';
import '../NavBar.css'
function NavBar(){
    return(
        <div className='myNav'>
            <div className="logo">
                <h4>MyTODO</h4>
            </div>
            <div className="setNavWidth">
                <ul className="navUL">
                    <a href="#"><li className="navItem">Tasks</li></a>
                    <a href="#"><li className="navItem">Planned</li></a>
                    <a href="#"><li className="navItem">Important</li></a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
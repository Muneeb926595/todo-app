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
                    <a href="../../public/index.html"><li className="navItem">Tasks</li></a>
                    <a href="../../public/index.html"><li className="navItem">Completed</li></a>
                    <a href="../../public/index.html"><li className="navItem">Important</li></a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
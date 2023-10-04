import React from 'react'
import { Icon } from '@iconify/react';

const Navigation = () => {
  return (
    <>
    {/* Mobile menu button */}
    <div id='home'className="visuallyHidden"></div>
    <div className='menuButton' id='menuButton' tabIndex='0'>
        <div className="linesContainer">
            <span></span>
        </div>
    </div>
    <aside className="sideMenu sideMenuShow" id="sideMenu">
        <p className="logo">SC</p>
        <nav>
            <ul className="navBar">
                <li className="homaNav">
                    <a href="#home" className="navItem">
                    <Icon icon="iconamoon:home-bold" />
                    <span className="navItemName">HOME</span>
                    </a>
                </li>
                <li className="aboutNav">
                    <a href="#about" className="navItem">
                    <Icon icon="majesticons:user-line" />
                    <span className="navItemName">ABOUT</span>
                    </a>
                </li>
                <li className="skillsNav">
                    <a href="#skills" className="navItem">
                    <Icon icon="icon-park-outline:code-laptop" />
                    <span className="navItemName">SKILLS</span>
                    </a>
                </li>
                <li className="projectsNav">
                    <a href="#projects" className="navItem">
                    <Icon icon="tabler:bulb" width={27}/>
                    <span className="navItemName">PROJECTS</span>
                    </a>
                </li>
                <li className="worksNav">
                    <a href="#works" className="navItem">
                    <Icon icon="octicon:briefcase-16" width={22}/>
                    <span className="navItemName">EXPERIENCE</span>
                    </a>
                </li>
                <li className="contactNav">
                    <a href="#contact" className="navItem">
                    <Icon icon="mingcute:phone-line" />
                    <span className="navItemName">CONTACT</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="scrollDown" id='scrollDown'>
        <i className="lni lni-arrow-down"></i> 
        <span className="navItemName scrollDownText">Scroll Down</span>
        </div>
    </aside>

    </>
  )
}

export default Navigation
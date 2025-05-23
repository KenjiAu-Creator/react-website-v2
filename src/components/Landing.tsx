import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Landing() {
    const scrollToTop = () => {
        if (document) {
            const bg = document.getElementById("bg-container");
            if (bg) {
                bg.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div className="grid w-full justify-content-center h-screen">
            <div className="landing w-10 sm:w-8 h-screen flex flex-column">
                <div className="h-screen">
                    <div id="landing-intro" className="fade-in">
                        Hi, my name is
                    </div>
                    <div id="landing-name" className="text-7xl sm:text-8xl mt-3 fade-in">
                        Kenji Au
                    </div>
                    <div id="landing-building" className="text-6xl fade-in">
                        I build things on the web.
                    </div>
                    <div id="landing-description" className="text-3xl mt-3 fade-in">
                        I'm a full stack software developer experienced in building web applications.
                    </div>
                </div>
                <div className="flex justify-content-center">
                    <div id="chevron-down align-content-end">
                        <FontAwesomeIcon icon={faChevronDown} size="4x" className="fa-bounce" onClick={scrollToTop} />
                    </div>
                </div>
            </div>
        </div>
    )
}
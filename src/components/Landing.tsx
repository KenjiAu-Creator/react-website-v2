import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Landing() {
    return (
        <div className="grid w-full justify-content-center">
            <div className="landing w-8">
                <div>
                    <div id="landing-intro">
                        Hi, my name is
                    </div>
                    <div id="landing-name">
                        Kenji Au
                    </div>
                    <div id="landing-building">
                        I build things on the web.
                    </div>
                    <div id="landing-description">
                        I'm a full stack software developer specialized in building web applications. Currently I am looking for new opportunities!
                    </div>
                </div>
                <div>
                    <div id="chevron-down">
                        <FontAwesomeIcon icon={faChevronDown} size="4x" />
                    </div>
                </div>
            </div>
        </div>
    )
}
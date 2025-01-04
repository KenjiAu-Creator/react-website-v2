import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Background() {
    return (
        <div className='bg-container'>
            <div id="chevron-down">
                <FontAwesomeIcon icon={faChevronDown} size="4x" />
            </div>
            <div className="bg" id="background">
                <div className="section-title">
                    <p>
                        BACKGROUND
                    </p>
                </div>
                <div className="background-content">
                    <p>
                        I'm currently looking to explore new opportunities!
                    </p>
                    <p>
                        As a full stack developer, I find joy in solving problems that come up from bringing projects from ideation to production. My goal is to always build applications that are efficient under the hood while providing engaging user experiences.
                    </p>
                    <p>
                        When I'm not coding, I'm probably out snowboarding or rocking climbing!
                    </p>
                </div>
            </div>
        </div>
    )
}
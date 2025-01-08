import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TriggerOutlook = () => {
    var body = '';
    var subject = "Message to Kenji Au";
    window.location.href = "mailto:kenji1@ualberta.ca?body=" + body + "&subject=" + subject;
}

export default function Contact() {
    return (
        <div className="contact" id="contact-section">
            <p className="contact-title">Get In Touch</p>
            <p>
                If you think we can create something or you have an opportunity please reach out! I am always looking for new opportunities. Please send me a message via email or LinkedIn. I will get back to you as fast as I can.
            </p>
            <div className="icon-box">
                <div className="icon">
                    <a className="icon-link" href="https://linkedIn.com/in/kenjiau-0123/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="4x" />
                    </a>
                </div>
                <div className="icon" onClick={TriggerOutlook}><FontAwesomeIcon icon={faEnvelope} size="4x" /></div>
                <div className="icon"><a className="icon-link" rel="noreferrer" href="https://github.com/KenjiAu-Creator" target="_blank"><FontAwesomeIcon icon={faGithub} size="4x" /></a></div>
            </div>
        </div>
    )
}
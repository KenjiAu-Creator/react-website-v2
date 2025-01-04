import React from "react";

export default function Header() {
    return (
        <div id="header">
            <ul>
                <li className="header-choice"><a href="#background">About</a></li>
                <li className="header-choice"><a href="#experience">Experience</a></li>
                <li className="header-choice"><a href="#feature">Projects</a></li>
                <li className="header-choice"><a href="#contact-section">Contact</a></li>
            </ul>
        </div>
    )
}
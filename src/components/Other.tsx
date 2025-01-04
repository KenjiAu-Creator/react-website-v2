import React from 'react';

export default function Other() {
    return (
        <div className="other" id="other-section">
            <div className="section-title">
                OTHER PROJECTS
            </div>
            <div className="other-content">
                <div className="proj-point">
                    <div className="proj-header">
                        <div className="proj-title">
                            My Calculator
                        </div>
                        <div className="proj-buttons">
                            <a href="https://github.com/KenjiAu-Creator/React-Redux-Router-Calc" target="_black" className="button">Code</a>
                            <a href="https://kenjiau-creator.github.io/React-Redux-Router-Calc/" target="_black" className="button">Demo</a>
                        </div>
                    </div>
                    <div className="proj-desc">
                        A small project created to practice React and Redux concepts. The application supports multiple expressions as well.
                    </div>
                    <div className="proj-tags">
                        <span className="tag">React</span>
                        <span className="tag">Redux</span>
                        <span className="tag">CSS</span>
                    </div>
                </div>
                <div className="proj-point">
                    <div className="proj-header">
                        <div className="proj-title">
                            Command Line Chess
                        </div>
                        <div className="proj-buttons">
                            <a href="https://github.com/KenjiAu-Creator/TheOdinProject-Chess" target="_black" className="button">Code</a>
                        </div>
                    </div>
                    <div className="proj-desc">
                        A milestone project for TheOdinProject created to practice object oriented programming concepts in Ruby. The game supports two players and features a GUI in shell.
                    </div>
                    <div className="proj-tags">
                        <span className="tag">Ruby</span>
                    </div>
                </div>
                <div className="proj-point">
                    <div className="proj-header">
                        <div className="proj-title">
                            Private Events
                        </div>
                        <div className="proj-buttons">
                            <a href="https://github.com/KenjiAu-Creator/TheOdinProject-Private-Event" target="_black" className="button">Code</a>
                            {/* <a href="https://secure-falls-65193.herokuapp.com/users" target="_black" className="button">Demo</a> */}
                        </div>
                    </div>
                    <div className="proj-desc">
                        A project created to practice Ruby and Ruby on Rails. Private events is an event creation application. It supports user authentication, attendee tracking, and event attendence.
                    </div>
                    <div className="proj-tags">
                        <span className="tag">Ruby</span>
                        <span className="tag">Ruby on Rails</span>
                        <span className="tag">CSS</span>
                    </div>
                </div>
                <div className="proj-point">
                    <div className="proj-header">
                        <div className="proj-title">
                            To Do List
                        </div>
                        <div className="proj-buttons">
                            <a href="https://github.com/KenjiAu-Creator/PHP-To-Do-List-Practice" target="_black" className="button">Code</a>
                        </div>
                    </div>
                    <div className="proj-desc">
                        A simple to do list created using PHP.
                    </div>
                    <div className="proj-tags">
                        <span className="tag">PHP</span>
                        <span className="tag">CSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
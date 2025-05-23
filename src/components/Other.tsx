import React from 'react';

export default function Other() {
    document.addEventListener('scroll', function () {
        const element = document.getElementById('personal-title');
        if (element) {
            const rect = element.getBoundingClientRect();
            // Check if the element is in view
            if (rect.top < (window.innerHeight / 2) && rect.bottom >= 0) {
                element.classList.remove("opacity-0")
                element.classList.add("fadeinleft")
                element.classList.add("animation-duration-1000")
            }
        }

        const translateUp = (divId: string): void => {
            const element = document.getElementById(divId);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Check if the element is in view
                if (rect.top < (window.innerHeight / 3) && rect.bottom >= 0) {
                    element.classList.remove("opacity-0")
                    element.classList.add("fadeindown")
                    element.classList.add("animation-duration-1000")
                }
            }
        }

        translateUp("personal-projects")
    });

    return (
        <div className="w-full sm:w-8" id="personal-section">
            <div className="w-full flex flex-wrap justify-content-center sm:justify-content-start">
                <div className="w-10 sm:w-4 flex justify-content-start sm:justify-content-center opacity-0" id="personal-title">
                    <div className="section-title">
                        <p className="text-4xl sm:text-sm">
                            PERSONAL PROJECTS
                        </p>
                    </div>
                </div>
                <div className="w-10 sm:w-8 opacity-0" id="personal-projects">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full mb-2">
                            <div className="flex flex-wrap align-items-center">
                                <div className="w-full my-2 sm:w-4 md:w-auto">
                                    <b className="mr-2 w-full sm:w-4">
                                        My Calculator
                                    </b>
                                </div>
                                <div className="w-full sm:w-auto">
                                    <span className="tag">React</span>
                                    <span className="tag">Redux</span>
                                    <span className="tag">CSS</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                            A small project created to practice React and Redux concepts. The application supports multiple expression calculations.
                        </div>
                        <div className="w-full mb-2">
                            <a href="https://kenjiau-creator.github.io/React-Redux-Router-Calc/" target="_black" className="button">Demo</a>
                            <a href="https://github.com/KenjiAu-Creator/React-Redux-Router-Calc" target="_black" className="button">Code</a>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap my-4">
                        <div className="w-full mb-2">
                            <div className="flex flex-wrap align-items-center">
                                <div className="w-full my-2 sm:w-6 md:w-auto">
                                    <b className="mr-2 w-full sm:w-4">
                                        Command Line Chess
                                    </b>
                                </div>
                                <div className="w-full md:w-auto">
                                    <span className="tag">Ruby</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                            A milestone project for TheOdinProject created to practice object oriented programming concepts in Ruby. The game supports two players and features a GUI in shell.
                        </div>
                        <div className="w-full mb-2">
                            <a href="https://github.com/KenjiAu-Creator/TheOdinProject-Chess" target="_black" className="button">Code</a>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap">
                        <div className="w-full mb-2">
                            <div className="w-full flex flex-wrap align-items-center">
                                <div className="w-full my-2 sm:w-6 md:w-auto">
                                    <b className="mr-2 w-full sm:w-4">
                                        Private Events
                                    </b>
                                </div>
                                <div className="w-full md:w-auto">
                                    <span className="tag">Ruby</span>
                                    <span className="tag">Ruby on Rails</span>
                                    <span className="tag">CSS</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                            A project created to practice Ruby and Ruby on Rails. Private events is an event creation application. It supports user authentication, attendee tracking, and event attendence.
                        </div>
                        <div className="w-full mb-2">
                            <a href="https://github.com/KenjiAu-Creator/TheOdinProject-Private-Event" target="_black" className="button">Code</a>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap my-4">
                        <div className="w-full mb-2">
                            <div className="flex flex-wrap align-items-center">
                                <div className="w-full my-2 sm:w-4 md:w-auto">
                                    <b className="mr-2 w-full sm:w-4">
                                        To Do List
                                    </b>
                                </div>
                                <div className="w-full md:w-auto">
                                    <span className="tag">PHP</span>
                                    <span className="tag">CSS</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                            A simple to do list created using PHP.
                        </div>
                        <div className="w-full mb-2">
                            <a href="https://github.com/KenjiAu-Creator/PHP-To-Do-List-Practice" target="_black" className="button">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
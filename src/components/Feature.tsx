import React from 'react';
// Image imports
import yummyLanding from "../assets/images/YummyLanding.png"
import yummyMobile from "../assets/images/YummyMobile.png"
import shopLanding from "../assets/images/ShopShop.png";
import shopMobile from "../assets/images/ShopMobile.png";
import boardLanding from "../assets/images/BoardLanding.png";
import boardMobile from "../assets/images/BoardMobile.png";

export default function Feature() {
    document.addEventListener('scroll', function () {
        const element = document.getElementById('collab-title');

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

        if (element) {
            const rect = element.getBoundingClientRect();
            // Check if the element is in view
            if (rect.top < (window.innerHeight / 2) && rect.bottom >= 0) {
                element.classList.remove("opacity-0")
                element.classList.add("fadeinleft")
                element.classList.add("animation-duration-1000")
            }
        }

        translateUp("yummy-project");
        translateUp("shopkidos-project");
        translateUp("board-project");
    });

    return (
        <div className="w-12 sm:w-8" id="feature">
            <div className="w-full flex flex-wrap justify-content-center sm:justify-content-start">
                <div className="section-title w-10 sm:w-4 sm:justify-content-center opacity-0" id="collab-title">
                    <p className="text-4xl sm:text-sm flex justify-content-center">
                        COLLABORATIVE PROJECTS
                    </p>
                </div>
                <div className="w-10 sm:w-8 flex flex-wrap">
                    <div className="w-full mb-8 opacity-0" id="yummy-project">
                        <div className="w-full flex">
                            <img
                                id="yummyLanding" className="w-8 sm:w-10" src={yummyLanding} alt="Landing for yummy desktop"
                            />
                            <img
                                id="yummyMobile"
                                className="w-3 sm:w-4"
                                src={yummyMobile}
                                alt="Landing for yummy mobile"
                            />
                        </div>
                        <p className="feat-desc">
                            Yummy is a meal planning application built on .NET Core, React and Tailwind.css. Yummy allows users to create profiles and save recipes along with meal plans.
                        </p>
                        <div className="proj-buttons">
                            <a href="https://github.com/KenjiAu-Creator/YummyProject" target="_blank" rel="noreferrer" className="button">Code</a>
                        </div>
                    </div>
                    <div className="w-full mb-8 opacity-0" id="shopkidos-project">
                        <div className="w-full flex">
                            <img id="shopLanding" className="w-8 sm:w-12" src={shopLanding} alt="Landing for shop landing" />
                            <img id="shopMobile" className="w-3 sm:w-4" src={shopMobile} alt="Landing for shop mobile" />
                        </div>
                        <p className="feat-desc">
                            An E-commerce site built around a non-profit / charity theme. The application features an online store with products obtained through an external third-party API. The application tracks products the user wishes to purchase with through a Redux state managed cart system.
                        </p>
                        <div className="proj-buttons">
                            <a href="https://kenjiau-creator.github.io/TECHCareers-React-Redux-Milestone/" target="_blank" rel="noreferrer" className="button">Demo</a>
                            <a href="https://github.com/KenjiAu-Creator/TECHCareers-React-Redux-Milestone" target="_blank" rel="noreferrer" className="button">Code</a>
                        </div>
                    </div>
                    <div className="w-full mb-8 opacity-0" id="board-project">
                        <div className="w-full flex">
                            <img id="boardLanding" className="w-8 sm:w-12" src={boardLanding} alt="Landing for board" />
                            <img id="boardMobile" className="w-3 sm:w-4" src={boardMobile} alt="Landing for board mobile" />
                        </div>
                        <p className="feat-desc">
                            A mobile application designed to help groups find a suitable board game to play based on length and player count. This project was created in collaboration with Steven Yan and was created with the intent to learn mobile development. This application was built using React Native on the frontend with a FlaskAPI backend that utilizes an external third-party API to fetch board games.
                        </p>
                        <div className="proj-buttons">
                            <a href="https://board-game-front-wheat.vercel.app/" target="_blank" rel="noreferrer" className="button">Demo</a>
                            <a href="https://github.com/KenjiAu-Creator/board-game-mobile" target="_blank" rel="noreferrer" className="button">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
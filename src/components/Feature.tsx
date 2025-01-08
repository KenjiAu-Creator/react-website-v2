import React from 'react';
// Image imports
import yummyLanding from "../assets/images/YummyLanding.png"
import yummyMobile from "../assets/images/YummyMobile.png"
import shopLanding from "../assets/images/ShopShop.png";
import shopMobile from "../assets/images/ShopMobile.png";
import boardLanding from "../assets/images/BoardLanding.png";
import boardMobile from "../assets/images/BoardMobile.png";

export default function Feature() {
    return (
        <div className="w-8" id="feature">
            <div className="w-full flex">
                <div className="section-title w-4 justify-content-center flex">
                    COLLABORATIVE PROJECTS
                </div>
                <div className="w-8 flex flex-wrap">
                    <div className="w-full mb-8">
                        <div className="w-full flex">
                            <img
                                id="yummyLanding" className="w-10" src={yummyLanding} alt="Landing photo for yummy desktop"
                            />
                            <img
                                id="yummyMobile"
                                className="w-4"
                                src={yummyMobile}
                                alt="Landing photo for yummy mobile"
                            />
                        </div>
                        <p className="feat-desc">
                            Yummy is a meal planning application built on .NET Core, React and Tailwind.css. Yummy allows users to create profiles and save recipes along with meal plans.
                        </p>
                        <div className="proj-buttons">
                            <a href="https://github.com/KenjiAu-Creator/YummyProject" target="_blank" className="button">Code</a>
                        </div>
                    </div>
                    <div className="w-full mb-8">
                        <div className="w-full flex">
                            <img id="shopLanding" className="w-12" src={shopLanding} />
                            <img id="shopMobile" className="w-4" src={shopMobile} />
                        </div>
                        <p className="feat-desc">
                            An E-commerce site built around a charity theme. The application features an online store with products obtained through an external API. The application tracks products the user wishes to purchase with through a Redux state managed cart system.
                        </p>
                        <div className="proj-buttons">
                            <a href="https://kenjiau-creator.github.io/TECHCareers-React-Redux-Milestone/" target="_blank" className="button">Demo</a>
                            <a href="https://github.com/KenjiAu-Creator/TECHCareers-React-Redux-Milestone" target="_blank" className="button">Code</a>
                        </div>
                    </div>
                    <div className="w-full mb-8">
                        <div className="w-full flex">
                            <img id="boardLanding" className="w-12" src={boardLanding} />
                            <img id="boardMobile" className="w-4" src={boardMobile} />
                        </div>
                        <p className="feat-desc">
                            A mobile application designed to help groups find a suitable board game to play based on length and player count. This project was created in collaboration with Steven Yan and was created with the intent to learn mobile development. This application was built using React Native on the frontend with a FlaskAPI backend.
                        </p>
                        <div className="proj-buttons">
                            <a href="https://board-game-front-wheat.vercel.app/" target="_blank" className="button">Demo</a>
                            <a href="https://github.com/KenjiAu-Creator/board-game-mobile" target="_blank" className="button">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
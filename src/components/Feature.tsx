import React from 'react';
// Image imports
import yummyLanding from "../assets/images/YummyLanding.png"
import yummyMobile from "../assets/images/YummyMobile.png"
import shopLanding from "../assets/images/ShopShop.png";
import shopMobile from "../assets/images/ShopMobile.png"

export default function Feature() {
    return (
        <div className="feat" id="feature">
            <div className="section-title">
                FEATURED PROJECTS
            </div>
            <div className="feat-content">
                <div className="proj-point">
                    <div className="proj-photos">
                        <img id="yummyLanding" src={yummyLanding} alt="Landing photo for yummy desktop" />
                        <img id="yummyMobile" src={yummyMobile} alt="Landing photo for yummy mobile" />
                    </div>
                    <p className="feat-desc">
                        Yummy is a meal planning application built on .NET Core, React and Tailwind.css. Yummy allows users to create profiles and save recipes along with meal plans.
                    </p>
                    <div className="proj-buttons">
                        <a href="https://github.com/KenjiAu-Creator/YummyProject" target="_blank" className="button">Code</a>
                    </div>
                </div>
                <div className="proj-point">
                    <div className="proj-photos">
                        <img id="shopLanding" src={shopLanding} />
                        <img id="shopMobile" src={shopMobile} />
                    </div>
                    <p className="feat-desc">
                        An E-commerce site built around a charity theme. The application features an online store with products obtained through an external API. The application tracks products the user wishes to purchase with through a Redux state managed cart system.
                    </p>
                    <div className="proj-buttons">
                        <a href="https://kenjiau-creator.github.io/TECHCareers-React-Redux-Milestone/" target="_blank" className="button">Demo</a>
                        <a href="https://github.com/KenjiAu-Creator/TECHCareers-React-Redux-Milestone" target="_blank" className="button">Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';

export default function Background() {
    document.addEventListener('scroll', function () {
        const element = document.getElementById('bg-container');
        if (element) {
            const rect = element.getBoundingClientRect();
            // Check if the element is in view
            if (rect.top < (window.innerHeight / 2) && rect.bottom >= 0) {
                element.classList.remove("opacity-0")
                element.classList.add("fadeinleft")
                element.classList.add("animation-duration-1000")
            }
        }
    });

    return (
        <div id="bg-container" className="w-8 opacity-0">
            <div className="bg w-full my-3 flex flex-wrap" id="background">
                <div className="section-title w-4 flex justify-content-center">
                    <p>
                        BACKGROUND
                    </p>
                </div>
                <div className="background-content w-8">
                    <p>
                        While I have degree in mechanical engineering, I found that my passion lies with software development.
                        I began out as mostly self taught and eventually was accepted into a coding bootcamp which propelled my skills and career!
                    </p>
                    <p>
                        I find joy in solving problems that come up from bringing projects from ideation to production.
                        My goal is to always build applications that are efficient under the hood while providing engaging user experiences.
                    </p>
                    <p>
                        When I'm not coding, I like to be out snowboarding or bouldering! While I do enjoy being active I also love to spend my time gaming!
                    </p>
                </div>
            </div>
        </div>
    )
}
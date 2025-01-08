import React from "react";

export default function Experience() {
    document.addEventListener('scroll', function () {
        const element = document.getElementById('experience');
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
        <div className="w-8 opacity-0" id="experience">
            <div className="w-full flex">
                <div className="section-title w-4 justify-content-center flex">
                    EXPERIENCE
                </div>
                <div className="w-8 flex flex-wrap">
                    <div className="w-full flex flex-wrap mb-4">
                        <div className="w-8">
                            <div className="flex flex-wrap">
                                <span className="w-full">
                                    <b>
                                        Software Developer
                                    </b>
                                </span>
                                <span className="company">Vantix Systems Inc.</span>
                            </div>
                        </div>
                        <div className="w-4">
                            <span>Nov. 2023 - Dec. 2024</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap mb-4">
                        <div className="w-8">
                            <div className="flex flex-wrap">
                                <span className="w-full">
                                    <b>
                                        Software Developer I
                                    </b>
                                </span>
                                <span className="company">Method1 Enterprise Software</span>
                            </div>
                        </div>
                        <div className="w-4">
                            <span>Mar. 2021 - Nov. 2023</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap mb-4">
                        <div className="w-8">
                            <div className="flex flex-wrap">
                                <span className="w-full">
                                    <b>
                                        Software Developer Intern
                                    </b>
                                </span>
                                <span className="company">Untribe</span>
                            </div>
                        </div>
                        <div className="w-4">
                            <span>Dec. 2020 - Mar. 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
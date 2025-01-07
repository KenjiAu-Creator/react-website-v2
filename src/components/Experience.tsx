import React from "react";

export default function Experience() {
    return (
        <div className="w-8" id="experience">
            <div className="w-full flex">
                <div className="section-title w-4 justify-content-center flex">
                    EXPERIENCE
                </div>
                <div className="w-8 flex flex-wrap">
                    <div className="w-full flex flex-wrap mb-8">
                        <div className="w-8">
                            <span>
                                <b>
                                    Software Developer
                                </b>
                            </span>
                            <span className="company">Vantix Systems</span>
                        </div>
                        <div className="w-4">
                            <span>Nov. 2023 - Dec. 2024</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap mb-8">
                        <div className="w-8">
                            <span>
                                <b>
                                    Software Developer I
                                </b>
                            </span>
                            <span className="company">Method1 Enterprise Software</span>
                        </div>
                        <div className="w-4">
                            <span>Mar. 2021 - Nov. 2023</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap mb-8">
                        <div className="w-8">
                            <span>
                                <b>
                                    Software Developer Intern
                                </b>
                            </span>
                            <span className="company">unTribe</span>
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
import React from 'react';

export default function Skills() {
    document.addEventListener('scroll', function () {
        const element = document.getElementById('skills');
        if (element) {
            const rect = element.getBoundingClientRect();
            // Check if the element is in view
            if (rect.top < (window.innerHeight / 2) && rect.bottom >= 0) {
                element.classList.remove("opacity-0")
                element.classList.add("fadeinright")
                element.classList.add("animation-duration-1000")
            }
        }
    });

    return (
        <div className="skills-block my-3 w-8 opacity-0" id="skills">
            <div className="w-full flex flex-wrap">
                <div className="section-title w-4 flex justify-content-center">
                    SKILLS
                </div>
                <div className="skills-content w-8 flex flex-wrap">
                    <div className="w-4 flex flex-wrap">
                        <div>
                            <div className="font-semibold">LANGUAGES</div>
                            <ul className="p-0">
                                <li className="skills-point">JavaScript</li>
                                <li className="skills-point">Ruby</li>
                                <li className="skills-point">GraphQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-4 flex flex-wrap">
                        <div>
                            <div className="font-semibold">LIBRARY & FRAMEWORKS</div>
                            <ul className="p-0">
                                <li className="skills-point">React</li>
                                <li className="skills-point">Redux</li>
                                <li className="skills-point">AJAX</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-4 flex flex-wrap ">
                        <div className="font-semibold">TOOLS & PLATFORMS</div>
                        <ul className="p-0">
                            <li className="skills-point">Git and GitHub</li>
                            <li className="skills-point">Postman</li>
                            <li className="skills-point">MySQL</li>
                            <li className="skills-point">Neo4j</li>
                            <li className="skills-point">PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
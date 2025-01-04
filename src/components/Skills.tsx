import React from 'react';

export default function Skills() {
    return (
        <div className="skills-block" id="skills">
            <div className="section-title">
                SKILLS
            </div>
            <div className="skills-content">
                <div className="skills-content-point">
                    <div className="list-title">LANGUAGES</div>
                    <div>
                        <ul className="skills-list">
                            <li className="skills-point">JavaScript</li>
                            {/* <li className="skills-point">C#</li> */}
                            <li className="skills-point">Ruby</li>
                            <li className="skills-point">GraphQL</li>
                        </ul>
                    </div>
                </div>

                <div className="skills-content-point">
                    <div className="list-title">LIBRARY & FRAMEWORKS</div>
                    <div>
                        <ul className="skills-list">
                            <li className="skills-point">React</li>
                            <li className="skills-point">Redux</li>
                            <li className="skills-point">AJAX</li>
                            <li className="skills-point">WordPress</li>
                            {/* <li className="skills-point">Rails</li> */}
                            {/* <li className="skills-point">.NET Core</li> */}
                        </ul>
                    </div>
                </div>
                <div className="skills-content-point">
                    <div className="list-title">TOOLS & PLATFORMS</div>
                    <div>
                        <ul className="skills-list">
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
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <div className="bio">
                <h4>– MY BACKGROUND</h4>
                <p>I’ve gone through a number of phases in my career, and each of them has informed my current work ethos and philosophy. I have excelled in a number of project management roles in diverse industries, and believe that my number one asset is my ability to adapt to any challenge that is thrown my way.</p> 
            </div>
            <div className="skills">
                <h4>– SKILLS</h4>
                <ul className="skillsList">
                    <li className="skillsLisItem">
                        <p>Leadership</p>
                    </li>
                    <li className="skillsLisItem">
                        <p>Communication</p>
                    </li>
                    <li className="skillsLisItem">
                        <p>Critical thinking</p>
                    </li>
                    <li className="skillsLisItem">
                        <p>Risk management</p>
                    </li>
                    <li className="skillsLisItem">
                        <p>Cost management</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;
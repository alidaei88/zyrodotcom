import './Activities.css';

const Activities = () => {




    return (
        <div className="activities">
            <div className='expriences'>
                <div className="titleHolder">
                    <h4>– WORK EXPERIENCE</h4>
                </div>
                <div className="content">
                    <h3 className="position">Senior project manager</h3>
                    <p className="dateAndPlace">Stilltech  / Aug 2018 - Present</p>
                    <p className="description">I’ve been central to delivering two extensive projects while working at Stilltech, both in the augmented reality space.</p>
                    <h3 className="position">Project manager</h3>
                    <p className="dateAndPlace">Yeall & Co / Aug 2016 - Aug 2018</p>
                    <p className="description">I was lucky to learn the ropes at Yeall Co., where I worked with an international team on projects including edible smartphone cases and human cloning. </p>
                </div>
            </div>
            <div className="education">
                <div className="titleHolder">
                    <h4>– EDUCATION</h4>
                </div>
                <div className="content">
                    <h3 className="position">Columbia University</h3>
                    <p className="dateAndPlace">Master's degree, International Business / 2016 - 2018</p>
                    <h3 className="position">Stanford University</h3>
                    <p className="dateAndPlace">Bachelor’s degree, Business Administration / 2012 - 2016</p>
                </div>
            </div>
            <div className="courses">
                <div className="titleHolder">
                    <h4>– COURSES</h4>
                </div>
                <div className="content">
                    <h3 className="position">Agile methodology</h3>
                    <p className="dateAndPlace">Spaetzle Institute / 2016</p>
                    <h3 className="position">Project management methodologies</h3>
                    <p className="dateAndPlace">Knödl Labs / 2017</p>
                </div>
            </div>

        </div>
    )
}

export default Activities;
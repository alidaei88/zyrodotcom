import './Main.css'
import Header from '../Header/Header';
import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import PreviewPart from '../PreviewPart/PreviewPart';
import Resume from '../Resume/Resume';
import Images from '../Images/Images';
import Activities from '../Activities/Activities';
import HeroWords from '../HeroWords/HeroWords';
import WhatTheySay from '../WhatTheySay/WhatTheySay';
import p1 from '../../public/P1.avif';
import p2 from '../../public/P2.avif';
import LetsTalk from '../LetsTalk/LetsTalk';
import Footer from '../Footer/Footer';

const Main = () => {

     //For NavBar scroll Changes
    const [scrolled, setScrolled] = useState(false);
    const scrollHandler = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else setScrolled(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    },[])

    //For Activities
    //     const personActivities = [
    //     {
    //         title: "WORK EXPERIENCE",
    //         position: "Senior project manager",
    //         dateAndPlace: "Stilltech  / Aug 2018 - Present",
    //         description: "I’ve been central to delivering two extensive projects while working at Stilltech, both in the augmented reality space."
    //         },
    //         {
    //             title: "EDUCATION",
    //             position: "Columbia University",
    //             dateAndPlace: "Master's degree, International Business / 2016 - 2018",
    //             description: ""
    //         },
    //         {
    //             title: "COURSES",
    //             position: "Senior project manager",
    //             dateAndPlace: "Stilltech  / Aug 2018 - Present",
    //             description: "I’ve been central to delivering two extensive projects while working at Stilltech, both in the augmented reality space."
    //         },
            
    // ]

    //For WhatTheySay
    const persons = [
        { image: p1, name:"JEREMY WATSON", comment: "We've worked on many projects together with Brooke at Stilltech, and she's a true asset to any team. She's a team player, but think on her feet and never settles for a no. Her ambition and passion for what she does is uncanny, and it's been a pleasure to see her progress and grow more confident in her professional role over time. I thoroughly recommend her for any leadership or project management roles." },
        { image: p2, name:"LIANNE HAYES", comment: "Brooke was my manager at Yeall & Co and taught me everything I know about project management. As an intern, she never treated me differently from other team members – instead, she whole-heartedly embraced my ideas and input. She helped me to think about the bigger picture and implement strategy into my everyday work, but also showed me how to bring people together and unite them for a single goal. " }
    ]


    return (
        <div className="container" onScroll={scrollHandler}>
           <Header scrolled={ scrolled }/>
            <NavBar scrolled={ scrolled }/>
            <PreviewPart />
            <Resume />
            <Images />
            <Activities />
            <HeroWords />
            <h1 className="whatTheySayH1">What they say:</h1>
            <div className="commentComponents">
              <WhatTheySay image={persons[0].image} name={persons[0].name} comment={persons[0].comment} />
              <WhatTheySay image={ persons[1].image } name={ persons[1].name } comment={ persons[1].comment } />
            </div>
            <LetsTalk />
            <Footer />
        </div>

    )
}


export default Main;
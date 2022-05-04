import './Footer.css';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='poweredBy'>
                <h1 className='producer'>Brooke R.</h1>
                <p className='website'>Powered by Zyro.com</p>
            </div>
            <div className='socialMedia'>
                <div className='socialContainer'>
                    <p className='social'>― SOCIALS</p>
                    <ul className='socialList'>
                        <li>
                            <p>Linkedin</p>
                        </li>
                        <li>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <p>Twitter</p>
                        </li>
                    </ul>
                </div>
                <div className='contactContainer'>
                    <p className='contact'>― CONTACTS</p>
                    <ul className='contactList'>
                        <li>
                            <p id="firstChild">your@email.com</p>
                        </li>
                        <li>
                            <p id="secondChild">123-123-123</p>
                        </li>
                    </ul>
                </div>

            </div>


        </div>

    )
}

export default Footer;
import './LetsTalk.css';
import contactMeImg from '../../public/contactme.avif'


const LetsTalk = () => {
    return (
        <div className="letsTalkSection">
            <div className="formSection">
                <h1 className="letsTalkTitle">Let's talk</h1>
                <form className="form">
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' placeholder="your name" />
                    <label htmlFor='email'>Your email*</label>
                    <input type="text" id='email' placeholder="your email address" />
                    <label htmlFor='message'>Message*</label>
                    <textarea id='message' placeholder="Enter your message" width="50%"></textarea>
                    <button className="submitBtn">Submit</button>
                </form>
            </div>
            <div className="contactImageHolder">
                <img className="contactMeImg" src={ contactMeImg } alt="Contact Me" />
            </div>

        </div>
    )
}

export default LetsTalk;
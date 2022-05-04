import './PreviewPart.css';
import image from '../../public/Mask-Group.avif';

const PreviewPart = () => {
    return (
        <div className="preview-part">
            <div className="preleftSide">
                <div className="leftSideFirstPart">
                    <p>Hi, I am Brooke, a project manager</p>
                    <button className="emailMe">
                        Email me
                    </button>
                </div>
                <div className="leftSideSecondPart">
                    <span>
                        <a href="https://linkdin.com/">Linkedin</a>
                        /
                        <a href="https://facebook.com/">Facebook</a>
                        /
                        <a href="https://twitter.com/">Twitter</a>
                    </span>
                    
                </div>

            </div>
            <div className="prerightSide">
                <img className='heroImage' src={ image} alt="hero" />
            </div>
        </div>
    )
}

export default PreviewPart;
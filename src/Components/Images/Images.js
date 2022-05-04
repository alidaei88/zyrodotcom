import './Images.css';
import image1 from '../../public/Mask-grid1.avif'
import image2 from '../../public/Mask-grid2.avif'
import image3 from '../../public/Mask-grid3.avif'

const Images = () => {
    return (
        <div className="images">
            <div className="image1">
                <img src={image1} alt="first" />
            </div>
            <div className="image1">
                <img src={image2} alt="second" />
            </div>
            <div className="image1">
                <img src={image3} alt="third" /> 
            </div>

        </div>
        
    )
}

export default Images;
import './WhatTheySay.css';



const WhatTheySay = ({image, name, comment}) => {
    return (
        <div className="WhatTheySay">
            <div className="comments">
                <img className="personImage" src={image} alt="Jeremy Watson" />
                <div className="personComments">
                    <h4 className="name">― {name}</h4>
                    <p className="comment">{comment} </p>
                </div>   
            </div>
        </div>
    )

}

export default WhatTheySay;
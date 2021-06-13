import React from 'react';

const Card = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma4 bw2 shadow-5'>
            <img alt={`This is a video and it can not be loaded. To see it go to ${props.imgurl}`} src={props.imgurl} />
            <div>
                <h2>{props.imgtitle}</h2>
                <p>{props.imgdescription}</p>
            </div> 
        </div>
    )
}

export default Card;
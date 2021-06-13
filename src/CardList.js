import React from 'react';
import Card from './Card';

const Cardlist = ({imgData}) => {
    return( 
        
        <Card 
            imgurl={imgData.url}
            imgtitle={imgData.title}
            imgdescription={imgData.explanation}
            imgmediatype={imgData.media_type}
        />  
    )             
};

export default Cardlist;
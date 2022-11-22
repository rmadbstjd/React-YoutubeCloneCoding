import React,{useEffect} from 'react';

import { useParams } from 'react-router-dom';
const Videos = () => {
    const {keyword} = useParams();
   
    
    return (
        <div>
            {keyword?`Videos for ${keyword}`:`Hot Videos`} 
        </div>
    );
};

export default Videos;
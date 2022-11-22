import React from 'react';
import useStore from '../store';
const Videos = () => {
    const {keyword} = useStore(state =>state);
    console.log("키워드",keyword);
    return (
        <div>
            {keyword.length===0?"Hot Videos":"Search Videos"} 
        </div>
    );
};

export default Videos;
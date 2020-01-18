import React from 'react';
import MyTabs from '../common/myTab/MyTabs.jsx';

function FoodComponent({
    title
}) {
    return(
        <div className="inner-tab" >
            <MyTabs
                title={title}
                currentIndex={0}
                index={0}
            />    
          </div>
    )
}

export default FoodComponent;
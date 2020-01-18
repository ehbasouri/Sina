import React from 'react';
import { THEME } from '../../../const/theme';


const MyTabs=({title, index, currentIndex, onClick})=>{
    return(
        <div onClick={()=>onClick(currentIndex)} className="tabs" style={{
            color: index === currentIndex ? "#fff" : "#aaa",
            backgroundColor: THEME.dark_color
        }} >
            {title}
        </div>
    )
}

export default MyTabs;
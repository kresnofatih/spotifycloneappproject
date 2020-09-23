import React from 'react';
import "./SidebarOption.css";

function SidebarOption({title, Icon}){
    return(
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ? <p className="marginp">{title}</p>: <p className="nomarginp">{title}</p>}
            
        </div>
    );
}

export default SidebarOption;
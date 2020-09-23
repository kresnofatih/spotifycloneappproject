import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar(){

    const [{playlists}, dispatch] = useDataLayerValue();

    return(
        <div className="sidebar">
            <img className="sidebar_logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt=""/>
            <SidebarOption Icon={AccountBalanceIcon} title="Home"/>
            <SidebarOption Icon={SearchOutlinedIcon} title="Search"/>
            <SidebarOption Icon={QueueMusicOutlinedIcon} title="Library"/>
            <h3 className="sidebar_title">PLAYLISTS</h3>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    );
}

export default Sidebar;
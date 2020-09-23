import React, {useEffect, useState} from 'react';
import "./Body.css";
import BodyHeader from './BodyHeader';
import {useDataLayerValue} from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import SongRow from './SongRow';

function Body({spotify}){
    
    const [{discover_weekly, user}, dispatch] = useDataLayerValue();
    return(
        <div className="body">
            <BodyHeader/>
            <div className="body_info">
                <img src="https://cdn.medcom.id/dynamic/content/2016/08/03/564190/5ou8yCcBGe.jpg?w=1024" alt=""/>
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songlist">
                <div className="songlist_header">
                    <PlayCircleFilledIcon className="songlist_play"/>
                    <MenuOpenIcon className="songlist_options"/>
                </div>
                    <SongRow
                        name = "Sewindu"
                        cover = "https://www.situstulus.com/wp-content/uploads/2020/02/COVER-ART-KUTSU-FIX-Small-227x227.jpg"
                        album = "Diorama"
                        artist = "Tulus"
                    />
                    <SongRow
                        name = "Summer"
                        cover = "https://fanart.tv/fanart/music/46eb0fb7-9725-43af-97d7-6c717682a799/albumcover/arcade-dreams-5ea08b169ab40.jpg"
                        album = "Arcade Dreams"
                        artist = "The Midnight"
                    />
                    <SongRow
                        name = "Lost Stars"
                        cover = "https://upload.wikimedia.org/wikipedia/en/7/77/Maroon_5_-_Overexposed.png"
                        album = "Overexposed"
                        artist = "Maroon5"
                    />
                    <SongRow
                        name = "Starboy"
                        cover = "https://i.pinimg.com/originals/48/24/93/48249335e8c3852d59a5a27e054bb8d2.jpg"
                        album = "Starboy Album"
                        artist = "the weeknd"
                    />
                    <SongRow
                        name = "Sunday Morning"
                        cover = "https://substreammagazine.com/wp-content/uploads/2017/05/it-wont-be-soon-maroon-5-album-art.jpg"
                        album = "It Won't Be Soon Before Long"
                        artist = "Maroon5"
                    />
                    <SongRow
                        name = "Kumau Dia"
                        cover = "https://i.scdn.co/image/ab67616d0000b27342ecaeec7fbe96cf69c8deb0"
                        album = "Cinta Luar Biasa"
                        artist = "Andmesh"
                    />
            </div>
        </div>
    );
}

export default Body;
import React from 'react';
import './SongRow.css';

function SongRow({name, cover, album, artist}) {

    return (
        <div className="songrow">
            <img className="songrow_album" src={cover} alt=""/>
            <div className="songrow_info">
                <h1>{name}</h1>
                <div className="album_data">
                    <p className="albumname">{album}</p>
                    <p className="artistname">{artist}</p>
                </div>
            </div>
            
        </div>
    );
}

export default SongRow;

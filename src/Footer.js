import React from 'react';
import "./Footer.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Slider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Footer(){
    return(
        <div className="footer">
            <div className="footer_left">
                <img className="footer_img" src="https://i.pinimg.com/564x/93/9f/be/939fbe6b2b6d393c61ce7d45de58c35d.jpg" alt=""/>
                <div>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer_center">
                <FastRewindIcon className="footer_icon" />
                <SkipPreviousIcon className="footer_icon"/>
                <PlayArrowIcon className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <FastForwardIcon className="footer_icon"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer_icon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
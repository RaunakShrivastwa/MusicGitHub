import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Favorite from './Favorite';
// import { LocalStorage } from 'node-localstorage';
// const localStorage = new LocalStorage('./localStorage');



const MusicBanner = ({ song, addFavorite }) => {
    const [songUrl, setSongUrl] = useState(song?.song)
    const [isFavorite, setIsFavorite] = useState(false);


    const toggleFavorite = (song) => {
        alert('helloo')
        setIsFavorite(!isFavorite);
        addFavorite({ isFavorite, song })


    };



    return (
        <div className="col-sm-12 col-md-9 container">
            <div className="card" style={{ backgroundColor: '#141b41' }}>
                <div className="card-body">
                    <div className="card border-0" style={{ maxWidth: '100%', height: 'auto', backgroundColor: '#141b41' }}>
                        <div className="row g-0">
                            <div className="col-md-12 mt-4">
                                <img
                                    style={{ borderRadius: '20px !important' }}
                                    src={song?.profile || "https://th.bing.com/th/id/OIP.e-3AF7Yv82uNIFRNhP4EDAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                                    className=" banner"
                                    alt="..."

                                />
                                <span className="tt1 rr px-2" onClick={() => { toggleFavorite(song) }}>
                                    <i
                                        id={song?._id}
                                        className={`fa fa-heart${isFavorite ? '' : '-o'} heart`}
                                        title={`Toggle Favorite Song`}
                                    ></i>
                                </span>

                            </div>
                            <div className='custom-audio-player p-2 audio-player-small-devices'>
                                <p className='text-white'>{song?.songName}</p>
                                <ReactAudioPlayer
                                    src={song?.song}
                                    controls
                                    volume={0.7}
                                    className=""
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicBanner;

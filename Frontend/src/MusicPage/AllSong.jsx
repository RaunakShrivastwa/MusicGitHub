import React, { useEffect, useState } from 'react';
import '../StaticReactComponent/css/similar.css';
import RecentMusic from './RecentMusic';
import MusicBanner from './MusicBanner';

import axios from 'axios';
import { Link } from 'react-router-dom';
import MusicLoading from './MusicLoading';
import Favorite from './Favorite';

function AllSong({ setSong, songs, idF }) {

    const containerStyle = {
        maxHeight: '270px',
        overflowY: 'auto',
    };

    let favoriteIds = JSON.parse(localStorage.getItem("favoriteSong")) || [];

    // Check if there are favorite songs
    const hasFavorites = favoriteIds.length > 0;

    return (
        <div className="row mt-3" style={{ height: '100%' }}>

            {/* Main content */}
            <div className={`col-sm-12 col-md-${hasFavorites ? '9' : '9'} position-relative`} style={{ marginTop: '-5%' }}>

                <div className="row mt-4 py-4">
                    {/* Favorite section */}
                    {hasFavorites && (
                        <div className="col-sm-6 col-md-4" >
                            <span className='text-white' style={{ background: '#0c1027' }}>Favorite</span>

                            <div style={{ background: '#0c1027' }}>
                                <div style={{ background: '#0c1027' }}>
                                    <Favorite idF={idF} setSong={setSong} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* All songs */}
                    <div className={`col-sm-6 col-md-${hasFavorites ? '8' : '12'}`}>
                        <span style={{ background: '#0c1027' }} className='text-white'>All Songs</span>
                        <div style={containerStyle} className="table-data">
                            <table className="table">
                                <tbody>
                                    {songs && songs?.map((song, index) => (
                                        <tr className='heart' onClick={() => setSong(song)} style={{ border: '10px solid #0c1027', borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                            <td style={{ backgroundColor: '#1a1e33' }}>
                                                <span className="tt1">{index + 1}</span>
                                                <img style={{ marginLeft: '4%' }} width="40px" src={song.profile} alt="" />
                                                <span style={{ marginLeft: '4%' }} className="tt1 rr">{song.songName}</span>
                                                <br />
                                            </td>
                                            <td style={{ backgroundColor: '#1a1e33' }}>
                                            </td>
                                            <td style={{ backgroundColor: '#1a1e33' }} className="tt1">
                                                <span style={{ marginLeft: '50%' }} className="tt1"><i className="fa fa-plus"></i></span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent */}
            <RecentMusic setSong={setSong} />
        </div>
    );
}

export default AllSong;

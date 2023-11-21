import React from 'react';
import '../StaticReactComponent/css/similar.css'
import MusicLoading from '../MusicPage/MusicLoading'

const SimilarArtist = ({ setSong, songs }) => {
    const containerStyle = {
        maxHeight: '240px',
        overflowY: 'auto',
    };
    return (
        <div className="col-sm-12 col-md-3 ">
            <div className="card" style={{ backgroundColor: '#0c1027' }}>
                <div className="card-body row" style={{ backgroundColor: '#0c1027' }}>
                    <div className='d-flex align-items-center w-100 justify-content-around' style={{ background: '#0c1027' }}>
                        {
                            !songs && <MusicLoading />
                        }
                    </div>
                    <p style={{ backgroundColor: '#0c1027' }} className='text-white'> Popular Song</p>
                    <div class="row row-cols-2 row-cols-md-3 g-2 pb-5 table-data" style={containerStyle}>

                        {
                            songs && songs.map((song, index) => (
                                song.popular && (
                                    <div class="col">
                                        <div class="card card1" onClick={() => setSong(song)}>
                                            <img src={song.profile} class="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                )
                            ))
                        }


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimilarArtist;

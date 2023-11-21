import React, { useEffect, useState } from 'react';
import '../StaticReactComponent/css/similar.css'
import axios from 'axios';

function RecentMusic({ setSong }) {
    const [recent, setRecent] = useState();
    const containerStyle = {
        maxHeight: '270px',
        overflowY: 'auto',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://musicbackend-o722.onrender.com/music/recent');
                setRecent(response.data.AllMusics);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="col-sm-12 col-md-3" style={{ marginTop: '-4%' }}>
            <div className="card" style={{ backgroundColor: '#0c1027' }}>
                {/* <div className="card-body row" style={{ backgroundColor: '#0c1027' }}> */}
                <span style={{ backgroundColor: '#0c1027' }} className='text-white mt-3'>Recent Upload:</span>
                {/* </div> */}
                <div class=" mb-3 mt-3 table-data" style={containerStyle}>
                    <div style={containerStyle} className="table-data">
                        <table className="table">
                            <tbody>
                                {

                                    recent && recent?.map((song, index) => (
                                        <tr className='heart' onClick={() => setSong(song)} style={{ border: '10px solid #0c1027', borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
                                            <td style={{ backgroundColor: '#1a1e33' }}>
                                                <img style={{ marginLeft: '4%', borderRadius: '50%' }} width="40px" src={song.profile} alt="" />
                                                <span style={{ marginLeft: '4%' }} className="tt1 rr"></span>
                                                <br />
                                            </td>
                                            <td style={{ backgroundColor: '#1a1e33' }}>
                                            </td>

                                            <td style={{ backgroundColor: '#1a1e33' }} className="tt1">
                                                <span style={{ marginLeft: '4%' }} className="tt1 rr">{song.songName}</span>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentMusic;

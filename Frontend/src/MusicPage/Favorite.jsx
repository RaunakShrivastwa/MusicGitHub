import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


function Favorite({ idF, setSong }) {
    let favoriteIds = JSON.parse(localStorage.getItem("favoriteSong")) || [];
    const [Fsong, setFsong] = useState(null);
    useEffect(() => {
        setFsong(favoriteIds)
    }, [idF]);

    const containerStyle = {
        maxHeight: '270px',
        overflowY: 'auto',
    };

    return (
        <div style={containerStyle} className="mb-3 table-data table-data ">
            <table className="table">
                <tbody>
                    {

                        Fsong && Fsong?.map((song) => (
                            <tr onClick={() => setSong(song)} className='heart' style={{ border: '10px solid #0c1027', borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
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
    )
}

export default Favorite
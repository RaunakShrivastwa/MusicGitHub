import React, { useState } from 'react'
import MusicPlayerFooter from './MusicPlayerFooter';
import MusicBody from './MusicBody';
import axios from 'axios';
import AllSong from './AllSong';
function MusicHome() {
    const [search, setSearch] = useState('');
    const [song, setSong] = useState('');
    return (

        <div style={{ maxHeight: '100vh ' }} className=''>
            {/* for the navigation */}
            <nav className="navbar position-static navbar-expand-lg bg-body-tertiary col-12 p-0 m-0">
                <div className="container-fluid head">
                    <a className="navbar-brand" href="#">
                        <img className='logo' src="https://img.icons8.com/?size=1x&id=Bri4HBrgCsPa&format=png"
                            alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ background: '#0c1027' }}>

                        {/* for the search box */}
                        <form className="d-flex justify-content-end form-shubham" role="search">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                className="form-control me-2 color-white search-box bb text-black" type="search" name="search" placeholder="Search" aria-label="Search" />
                        </form>

                        {/* for notification */}
                        <div className="me-5 text-white my-div" style={{ background: '#0c1027' }}>
                            <img className='notification'
                                src="https://ouch-cdn2.icons8.com/Uh6795tM9rmhHqNE2pBEwOkHkPYH4-lVZSGIiWLXcAI/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDg5/L2ZiMTdjMTRjLWRi/NjctNGQwMy1iODhj/LWIzZDk5MTIwYzEw/Mi5wbmc.png"
                                alt="xyz.jpg" />
                        </div>

                        {/* for the Profile */}
                        <div className="text-white" style={{ background: '#0c1027' }}>
                            <img width='35px' height='35px'
                                src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                                alt="abc.jpg" />
                        </div>


                    </div>
                </div>
            </nav>


            <MusicBody search={search} />


            {/* <MusicPlayerFooter /> */}


        </div>

    )
}

export default MusicHome
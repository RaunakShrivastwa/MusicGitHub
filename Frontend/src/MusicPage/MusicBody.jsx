import SimilarArtist from './SimilarArtist';
import MusicBanner from './MusicBanner';
import AllSong from './AllSong';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../StaticReactComponent/css/similar.css';
import Footer from './MusicPlayerFooter'

function MusicBody({ search }) {
    const [songs, setSongs] = useState(); // Change "song" to "songs" for consistency
    const [song, setSong] = useState();
    const [ids, setIds] = useState();
    const [fav, setFav] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://musicbackend-o722.onrender.com/music/getAll');
                console.log(response);
                setSongs(response.data.AllMusics);
                setSong(response.data.AllMusics[0])

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Make sure to add "axios" as a dependency if you use it within the effect.





    const filterSong = (search) => {
        if (search !== '') {
            const song = songs?.filter((item) => item.songName
                .toLowerCase().includes(search?.toLowerCase()));
            return song

        }
        else {
            return songs
        }
    }

    function addFavorite({ isFavorite, song }) {
        let arr = JSON.parse(localStorage.getItem("favoriteSong")) || [];
        const index = arr.findIndex(favSong => favSong?._id === song?._id);
        if (index !== -1) {
            arr.splice(index, 1);
        } else {
            arr.push(song);
        }
        localStorage.setItem("favoriteSong", JSON.stringify(arr));
        setIds(!isFavorite);
    }



    return (
        <div className="container-fluied p-3 body-one" style={{ height: '100vh' }}>
            <div className="container-f " style={{ height: 'auto' }}>
                <div className='row'>

                    <MusicBanner fav={fav} song={song} addFavorite={addFavorite} />
                    <SimilarArtist songs={songs} setSong={setSong} />

                </div>

                <AllSong songs={filterSong(search)} setSong={setSong} idF={ids} />

            </div> <Footer fav={fav} song={song} addFavorite={addFavorite} />

        </div>
    )
}

export default MusicBody
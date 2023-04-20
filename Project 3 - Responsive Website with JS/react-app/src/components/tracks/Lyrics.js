// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import Spinner from "../layout/Spinner";
// import Moment from "react-moment";
//
// const Lyrics = () => {
//     const [track, setTrack] = useState({});
//     const [lyrics, setLyrics] = useState({});
//     const [genre, setGenre] = useState("");
//     const { id } = useParams();
//
//     useEffect(() => {
//         axios
//             .get(
//                 `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
//             )
//             .then((res) => {
//                 let lyrics = res.data.message.body.lyrics;
//                 setLyrics(lyrics);
//
//                 return axios.get(
//                     `https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
//                 );
//             })
//             .then((res) => {
//                 let track = res.data.message.body.track;
//                 setTrack(track);
//
//                 // get genre from music.genres.get
//                 return axios.get(
//                     `https://api.musixmatch.com/ws/1.1/music.genres.get?apikey=${process.env.REACT_APP_MM_KEY}&format=json&callback=callback&genre_id=${track.primary_gen_genre_id}`
//                 );
//             })
//             .then((res) => {
//                 let genre =
//                     res.data.message.body.music_genre_list.length > 0
//                         ? res.data.message.body.music_genre_list[0].music_genre.music_genre_name
//                         : "NO GENRE AVAILABLE";
//                 setGenre(genre);
//             })
//             .catch((err) => console.log(err));
//     }, [id]);
//
//     if (
//         track === undefined ||
//         lyrics === undefined ||
//         genre === undefined ||
//         Object.keys(track).length === 0 ||
//         Object.keys(lyrics).length === 0
//     ) {
//         return <Spinner />;
//     } else {
//         return (
//             <>
//                 <Link to="/" className="btn btn-dark btn-sm mb-4">
//                     Go Back
//                 </Link>
//                 <div className="card">
//                     <h5 className="card-header">
//                         {track.track_name} by{" "}
//                         <span className="text-secondary">{track.artist_name}</span>
//                     </h5>
//                     <div className="card-body">
//                         <p className="card-text">{lyrics.lyrics_body}</p>
//                     </div>
//                 </div>
//
//                 <ul className="list-group mt-3">
//                     <li className="list-group-item">
//                         <strong>Album ID</strong>: {track.album_id}
//                     </li>
//                     <li className="list-group-item">
//                         <strong>Song Genre</strong>: {genre}
//                     </li>
//                     <li className="list-group-item">
//                         <strong>Explicit Words</strong>:{" "}
//                         {track.explicit === 0 ? "No" : "Yes"}
//                     </li>
//                     <li className="list-group-item">
//                         <strong>Release Date</strong>:{" "}
//                         <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
//                     </li>
//                 </ul>
//             </>
//         );
//     }
// };
//
// export default Lyrics;
//

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

const Lyrics = () => {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});
    const [genre, setGenre] = useState("");
    const [albumCover, setAlbumCover] = useState("");
    const { id } = useParams();


    useEffect(() => {
        axios
            .get(
                `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
            )
            .then((res) => {
                let lyrics = res.data.message.body.lyrics;
                setLyrics(lyrics);

                return axios.get(
                    `https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
                );
            })
            .then((res) => {
                let track = res.data.message.body.track;
                setTrack(track);

                // get genre from music.genres.get
                return axios.get(
                    `https://api.musixmatch.com/ws/1.1/music.genres.get?apikey=${process.env.REACT_APP_MM_KEY}&format=json&callback=callback&genre_id=${track.primary_gen_genre_id}`
                );
            })
            .then((res) => {
                let genre =
                    res.data.message.body.music_genre_list.length > 0
                        ? res.data.message.body.music_genre_list[0].music_genre.music_genre_name
                        : "NO GENRE AVAILABLE";
                setGenre(genre);

                // get album cover from track.album.get
                return axios.get(
                    `https://api.musixmatch.com/ws/1.1/album.get?apikey=${process.env.REACT_APP_MM_KEY}&format=json&callback=callback&album_id=${track.album_id}`
                );
            })
            .then((res) => {
                let albumCover =
                    res.data.message.body.album.album_coverart_100x100 ||
                    "https://via.placeholder.com/100x100.png?text=No+Album+Cover";
                setAlbumCover(albumCover);
            })
            .catch((err) => console.log(err));
    }, [id]);

    if (
        track === undefined ||
        lyrics === undefined ||
        genre === undefined ||
        albumCover === undefined ||
        Object.keys(track).length === 0 ||
        Object.keys(lyrics).length === 0
    ) {
        return <Spinner />;
    } else { return (
        <>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
                Go Back
            </Link>
            <div className="card">
                <h5 className="card-header">
                    {track.track_name} by{" "}
                    <span className="text-secondary">{track.artist_name}</span>
                </h5>
                <div className="card-body">
                    <p className="card-text">{lyrics.lyrics_body}</p>
                </div>
            </div>

            <ul className="list-group mt-3">
                <li className="list-group-item">
                    <strong>Album ID</strong>: {track.album_id}
                </li>
                <li className="list-group-item">
                    <strong>Song Genre</strong>: {genre}
                </li>
                <li className="list-group-item">
                    <strong>Explicit Words</strong>:{" "}
                    {track.explicit === 0 ? "No" : "Yes"}
                </li>
                <li className="list-group-item">
                    <strong>Release Date</strong>:{" "}
                    <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                </li>
                <li className="list-group-item">
                    <strong>Album Cover</strong>: <img src={track.album_coverart_100x100} alt={track.album_name}/>
                </li>
            </ul>
        </>
    );
    }
};

export default Lyrics;

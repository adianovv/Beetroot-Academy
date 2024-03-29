import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const Search = () => {
    const [state, setState] = useContext(Context);
    const [userInput, setUserInput] = useState("");

    const findTrack = e => {
        e.preventDefault();
        axios
            .get(
                `https://api.musixmatch.com/ws/1.1/track.search?q_track=${userInput}&page_size=10&page=1&s_track_rating=desc&apikey=${
                    process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                let track_list = res.data.message.body.track_list;
                setState({ track_list: track_list, heading: "Search Results" });
            })
            .catch(err => console.log(err));
    };

    const onChange = e => {
        setUserInput(e.target.value);
    };

    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For A Song
            </h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form onSubmit={findTrack}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Song title..."
                        name="userInput"
                        value={userInput}
                        onChange={onChange}
                    />
                </div>
                <button className="search_button btn btn-dark btn-lg btn-block mb-5" type="submit">
                    Get Track Lyrics
                </button>
            </form>
        </div>
    );
};

export default Search;

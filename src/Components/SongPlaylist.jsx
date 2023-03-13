import React from 'react';
import {createRandomSong} from "../Data/faker";
import {useDispatch, useSelector} from "react-redux";
import {addSong, removeSong} from "../Store";

const SongPlaylist = () => {
    const dispatch = useDispatch();

    // To Do:
    // Get list of songs
    const songPlaylist = useSelector((state) => state.songs);

    const handleSongAdd = (song) => {
        // To Do:
        // Add song to list of songs
        const action = addSong(song);
        // console.log(action);
        dispatch(action)
    };
    const handleSongRemove = (song) => {
        // To Do:
        // Remove song from list of songs
        // console.log(removeSong(song));
        dispatch(removeSong(song));
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <button
                    onClick={() => handleSongRemove(song)}
                    className="button is-danger"
                >
                    X
                </button>
            </li>
        );
    });

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song Playlist</h3>
                <div className="buttons">
                    <button
                        onClick={() => handleSongAdd(createRandomSong())}
                        className="button is-link"
                    >
                        + Add Song to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
};

export default SongPlaylist;

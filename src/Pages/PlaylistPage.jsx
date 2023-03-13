import './PlaylistPage.css';
import {MoviePlaylist} from "../Components";
import {SongPlaylist} from "../Components";
import '../Store';
import {useDispatch} from "react-redux";
import {reset} from "../Store";

const PlaylistPage = () => {
    const dispatch = useDispatch();
    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr/>
            <MoviePlaylist/>
            <hr/>
            <SongPlaylist/>
        </div>
    );
}

export default PlaylistPage;
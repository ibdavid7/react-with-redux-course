import React from 'react';
import {Button} from "antd";
import {useDeleteAlbumMutation} from "../Store";
import {GoTrashcan} from "react-icons/go";
import {ExpandablePanel, PhotosList} from "./index";

const AlbumsListItem = ({album}) => {

    const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation();

    const handleAlbumDelete = () => {
        deleteAlbum(album);
    }

    const header = (
        <>
            <Button
                type="dashed"
                loading={deleteAlbumResults.isLoading}
                onClick={handleAlbumDelete}
            >
                <GoTrashcan/>
            </Button>
            <div className={'px-3'}>
                {album.title}
            </div>
            {deleteAlbumResults.error && <p className={'text-red-600'}>Error Deleting Album</p>}
        </>
    );

    return (
        <ExpandablePanel
            header={header}
        >
            List of Songs
            <PhotosList album={album}/>

        </ExpandablePanel>
    );
};

export default AlbumsListItem;

import React from 'react';
import {Image} from "antd";
import {useDeletePhotoMutation} from "../Store";
import {GoTrashcan} from "react-icons/go";

const PhotoListItem = ({photo}) => {

    const [deletePhoto, deletePhotoResults] = useDeletePhotoMutation();

    const content = (
            <Image
                className={'p-1 w-20'}
                onClick={() => deletePhoto(photo)}
                preview={{
                    visible: false,
                }}
                width={100}
                height={100}
                src={photo.url}
                // loading={deletePhotoResults.isLoading}
                alt={deletePhotoResults.error && <p className={'text-red-600'}>Error Deleting Photo</p>}
            />
        )
    ;

    return (
        <>
            {content}
        </>

    );
};

export default PhotoListItem;

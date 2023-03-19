import React from 'react';
import {useAddPhotoMutation, useFetchPhotosQuery} from "../Store";
import {Button, List} from "antd";
import {PhotoListItem} from "./index";

const PhotosList = ({album}) => {
    const {data, error, isLoading} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    return (
        <div className={'flex-row flex flex-wrap'}>
            <List
                style={{width: '100%', border: '1px dashed lightgray'}}
                header={error && <div>{`Error fetching data: ${error.toString()}`}</div> ||
                    (
                        < div className='flex flex-row justify-between items-center'>
                            <div> Photos for Album {album.title}  </div>
                            <Button onClick={() => addPhoto(album)} type="primary"
                                    loading={addPhotoResults.isLoading}>{addPhotoResults.isLoading ? "Adding" +
                                " Photo" : "Add Photo"}</Button>
                        </div>
                    )}
                // footer={}
                bordered
                loading={isLoading}
                loadMore
                dataSource={data}
                renderItem={(photo) => {
                    return (
                        <PhotoListItem key={photo.id} photo={photo}/>
                    );
                }}
            />
        </div>
    );
}

export default PhotosList;
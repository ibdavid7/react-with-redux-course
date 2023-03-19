import React from 'react';
import {useAddAlbumMutation, useFetchAlbumsQuery} from "../Store";
import {AlbumsListItem} from "./index";
import {Button, List} from "antd";

const AlbumsList = ({user}) => {
    const {data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, addAlbumresults] = useAddAlbumMutation();

    return (
        <div>
            <List
                style={{width: '100%', border: '1px dashed lightgray'}}
                header={error && <div>{`Error fetching data: ${error.toString()}`}</div> ||
                    (
                        < div className='flex flex-row justify-between items-center'>
                            <div> Albums for {user.name}  </div>
                            <Button onClick={() => addAlbum(user)} type="primary"
                                    loading={addAlbumresults.isLoading}>{addAlbumresults.isLoading ? "Adding Album" : "Add Album"}</Button>
                        </div>
                    )}
                // footer={}
                bordered
                loading={isLoading}
                loadMore
                dataSource={data}
                renderItem={(album) => {
                    return (
                        <AlbumsListItem key={album.id} album={album}>

                        </AlbumsListItem>
                    );
                }}
            />
        </div>
    );
}

export default AlbumsList;

import React from 'react';
import {Button, List} from "antd";
import {useThunk} from "../Hooks";
import {deleteUser} from "../Store";
import {GoTrashcan} from "react-icons/go";
import {AlbumsList, ExpandablePanel} from "./index";

const UsersListItem = ({user}) => {

    const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

    const handleUserDelete = () => {
        doDeleteUser(user.id);
    }

    const header = <>
        <Button
            className={'justify-center'}
            type="dashed"
            danger
            loading={isDeletingUser}
            onClick={handleUserDelete}
        >
            <GoTrashcan/>
        </Button>
        <div className={'px-3'}>
            {user.name}
        </div>
        {deletingUserError && <p>{deletingUserError}</p>}
    </>

    return (
        // <List.Item className={'flex p-2 justify-between items-center cursor-pointer'}>
        //     <Button type="dashed" danger loading={isDeletingUser}
        //             onClick={handleUserDelete}>X</Button>
        //     <div>
        //         {user.name}
        //     </div>
        //     {deletingUserError && <p>{deletingUserError}</p>}
        // </List.Item>

        <ExpandablePanel
            header={header}
        >
            <AlbumsList user={user}/>
        </ExpandablePanel>

    );
};

export default UsersListItem;

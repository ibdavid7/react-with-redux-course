import React from 'react';
import {Button, List} from "antd";
import {useThunk} from "../Hooks";
import {deleteUser} from "../Store";

const UsersListItem = ({user}) => {

    const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

    const handleUserDelete = () => {
        doDeleteUser(user.id);
    }

    return (
        <List.Item className={'flex p-2 justify-between items-center cursor-pointer'}>
            <Button type="dashed" danger loading={isDeletingUser}
                    onClick={handleUserDelete}>X</Button>
            <div>
                {user.name}
            </div>
            {deletingUserError && <p>{deletingUserError}</p>}
        </List.Item>
    );
};

export default UsersListItem;

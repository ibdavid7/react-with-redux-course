import React, {useCallback, useEffect, useState} from 'react';
import {Divider, List, Button, Input, Skeleton} from 'antd';
import {useSelector} from 'react-redux';
import {addUser, deleteUser, fetchUsers} from '../Store';
import {useThunk} from "../Hooks";
import {UsersListItem} from "./index";

const UsersList = () => {


    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    // replaced by useThunk custom hook
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const [loadingUsersError, setLoadingUsersError] = useState(null);
    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [creatingUserError, setCreatingUserError] = useState(null);
    // const dispatch = useDispatch();
    // const { data, isLoading, error } = useSelector((state) => state.users);

    const {data} = useSelector((state) => state.users);

    useEffect(() => {
        // set isLoading state
        // setIsLoadingUsers(true);
        // dispatch(fetchUsers())
        //     .unwrap()   // dispatch promise doesn't give an error so need unwrap it
        //     .then(() => {
        //         // console.log('SUCCESS');
        //     })
        //     .catch((error) => {
        //         // console.log('FAIL');
        //         setLoadingUsersError(error);
        //     })
        //     .finally(() => {
        //         setIsLoadingUsers(false);
        //     })

        // useThunk custom hook
        doFetchUsers();
    }, [doFetchUsers]);


    if (loadingUsersError) {
        return <div>Error fetching data...{loadingUsersError}</div>
    }

    // replaced by antd Button loading
    // if (isLoading) {
    //     return <Skeleton times={6} className={'h-10 w-full'} />
    // }

    const handleAddUser = () => {
        // setIsCreatingUser(true);
        // dispatch(addUser())
        //     .unwrap()
        //     .then(() => {
        //     })
        //     .catch((error) => setCreatingUserError(error))
        //     .finally(() => {
        //         setTimeout(() => {
        //             setIsCreatingUser(false)
        //         }, 1000);
        //     });

        // useThunk instead
        doCreateUser();
    }

    return (
        <div className='min-w-full'>
            <Divider orientation="center">List of Users</Divider>
            <List
                style={{width: '300px'}}
                header={loadingUsersError && <div>{loadingUsersError}</div> ||
                    (
                        < div className='flex flex-row justify-between items-center'>
                            <Button onClick={handleAddUser} type="primary"
                                    loading={isCreatingUser}>{isCreatingUser ? "Creating User" : "Add User"}</Button>
                        </div>
                    )}
                // footer={}
                bordered
                loading={isLoadingUsers}
                loadMore
                dataSource={data}
                renderItem={(user) => (
                    <UsersListItem user={user}/>
                )}
            />
        </div>
    );
}

export default UsersList;

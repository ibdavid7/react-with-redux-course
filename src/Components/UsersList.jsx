import React, { useEffect } from 'react';
import { Divider, List, Button, Input, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../Store';
import addUser from '../Store/Thunks/addUser';

const UsersList = () => {

    const dispatch = useDispatch();

    const { data, isLoading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    });

    if (error) {
        return <div>Error fetching data...</div>
    }

    // if (isLoading) {
    //     return <Skeleton times={6} className={'h-10 w-full'} />
    // }

    const handleAddUser = () => {
        dispatch(addUser());
    }

    return (
        <div className='min-w-full'>
            <Divider orientation="center">List of Users</Divider>
            <List
                header={error && <div>{error}</div> ||
                    (
                        < div className='flex flex-row justify-between'>
                            <Button onClick={handleAddUser}>Add Users</Button>
                        </div>
                    )}
                // footer={<div className='text-justify'>Total Cost: {total.toLocaleString('en-US', {
                //     style: 'currency',
                //     currency: 'USD',
                // })}</div>}
                bordered
                loading={isLoading}
                loadMore
                // dataSource={filteredCars}
                renderItem={(user) => (
                    <List.Item className={'flex p-2 justify-between items-center cursor-pointer'}>
                        <Button type="dashed" danger onClick={() => { }}>X</Button>
                        <>
                            {user.name}
                        </>
                    </List.Item>
                )}
            />
        </div >
    );
}

export default UsersList;

import React from 'react';
import { Divider, List, Button, Input } from 'antd';

const UsersList = () => {
    return (
        <div>
            <Divider orientation="center">List of Cars Owned</Divider>
            <List
                // header={<Search placeholder="input search text" onSearch={handleOnSearch} onChange={handleOnChange} enterButton allowClear />}
                // footer={<div className='text-justify'>Total Cost: {total.toLocaleString('en-US', {
                //     style: 'currency',
                //     currency: 'USD',
                // })}</div>}
                bordered
                // dataSource={filteredCars}
                renderItem={(item) => (
                    <List.Item className={'flex justify-between'}>
                        <>
                            {`${item.name} - ${item.cost.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}`}
                        </>
                        <Button type="dashed" danger onClick={() => handleOnDelete(item.id)}>X</Button>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default UsersList;

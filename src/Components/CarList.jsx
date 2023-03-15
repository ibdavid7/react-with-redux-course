import React from 'react';
import { Divider, List, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../Store';

const CarList = () => {

    const dispatch = useDispatch();
    const carList = useSelector((state) => state.carList.data);
    const total = carList.reduce((accum, curr) => accum + curr.cost, 0);

    const handleOnDelete = (id) => {
        // console.log(id)
        dispatch(removeCar(id));
    }

    return (
        <div>
            <Divider orientation="center">Default Size</Divider>
            <List
                header={<div>Listing cars owned</div>}
                footer={<div className='text-justify'>Total Cost: {total.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}</div>}
                bordered
                dataSource={carList}
                renderItem={(item) => (
                    <List.Item className='flex justify-between'>
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
};

export default CarList;

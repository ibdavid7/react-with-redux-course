import React from 'react';
import { Divider, List, Button, Input } from 'antd';
import { useDispatch, useSelector, } from 'react-redux';
import { removeCar, updateSearchTerm, store } from '../Store';
const { Search } = Input;

const CarList = () => {

    const dispatch = useDispatch();
    const { carList: { filteredCars, searchTerm }, carForm: { name } } = useSelector(({ carForm: { name }, carList: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => {
            if (searchTerm) {
                const regex = new RegExp(searchTerm, 'gi');
                return car.name.match(regex);
            } else {
                return true;
            }
        })
        return {
            carList: { filteredCars, searchTerm },
            carForm: { name }
        }
    });

    const total = filteredCars.reduce((accum, curr) => accum + curr.cost, 0);

    const handleOnDelete = (id) => {
        // console.log(id)
        dispatch(removeCar(id));
    }

    const handleOnChange = (event) => {
        // console.log(event.target.value)
        dispatch(updateSearchTerm(event.target.value));

    }

    const handleOnSearch = (value) => {
        dispatch(updateSearchTerm(value));
    }

    // console.log(store.getState());

    return (
        <div>
            <Divider orientation="center">List of Cars Owned</Divider>
            <List
                header={<Search placeholder="input search text" onSearch={handleOnSearch} onChange={handleOnChange} enterButton allowClear />}
                footer={<div className='text-justify'>Total Cost: {total.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}</div>}
                bordered
                dataSource={filteredCars}
                renderItem={(item) => (
                    <List.Item className={`flex justify-between ${name && item.name.match(new RegExp('^' + name)) && 'font-bold'}`}>
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

import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, InputNumber, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateCost, resetCarForm, addCar, store } from '../Store';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 24,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 24,
    },
};



const CarForm = () => {
    const dispatch = useDispatch();


    const { name, cost } = useSelector((state) => {
        return {
            name: state.carForm.name,
            cost: state.carForm.cost
        }
    });



    const formRef = React.useRef(null);

    const onReset = () => {
        dispatch(resetCarForm());
        formRef.current?.resetFields();
    };

    const handleOnChangeName = (event) => {
        // console.log(event.target.value);
        dispatch(updateName(event.target.value));
    }

    const handleOnChangeCost = (val) => {
        // console.log(val)
        // const val = parseInt(event.target.value);
        dispatch(updateCost(val));
    }

    const handleOnFinish = (input) => {
        // console.log(input)
        dispatch(addCar({
            ...input,
        }));
        formRef.current?.resetFields();

    }

    // console.log(store.getState())

    return (
        <div>
            <h3 className='subtitle is-3 pb-3'>Add Car</h3>
            <Form
                {...layout}
                ref={formRef}
                name="control-ref"
                style={{
                    maxWidth: 1000,
                    minWidth: 400
                }}
                onFinish={handleOnFinish}
            >
                <Form.Item
                    name="name"
                    label="Car Name"
                    rules={
                        [{ required: true, message: 'Please input car name' }]
                    }
                >
                    <Input
                        value={name}
                        style={{ minWidth: '100%' }}
                        onChange={handleOnChangeName}
                    />
                </Form.Item>

                <Form.Item
                    name="cost"
                    label="Car Value"
                    rules={
                        [{ required: true, type: 'number', message: 'Please input car cost' }]
                    }
                >
                    <InputNumber
                        value={cost}
                        style={{ minWidth: '100%' }}
                        decimalSeparator
                        onChange={handleOnChangeCost}
                        type='number'
                    />
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div >

    );
};

export default CarForm;

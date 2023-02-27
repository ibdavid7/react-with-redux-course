import React, {useState} from 'react';
import {pda} from "../Data/dummy";
import {Avatar, Card} from 'antd';
import {Button, Space, Divider} from 'antd';
import {bird, cat, cow, dog, gator, heart, horse} from '../Assets';

const {Meta} = Card;

const AnimalWidget = () => {

    // const [count, setCount] = useState(0);

    const animalTypes = [bird, cat, cow, dog, gator, heart, horse];
    const [animals, setAnimals] = useState([]);

    const handleOnClick = () => {
        const rand = Math.floor(Math.random() * (animalTypes.length));
        setAnimals([...animals, animalTypes[rand]]);
        // setCount(count + 1);
    }

    return (

        <div className={'flex flex-col'}
             style={{
                 display: 'flex', flexDirection: 'column',
                 backgroundColor: 'rgb(249 250 251)',
                 borderRadius: '10px', minWidth: '80%',
                 paddingBottom: '20px'
             }}>

            {/*Heading*/}
            <div className={'p-8 m-10 bg-slate-400'}
                 style={{
                     padding: '10px 0 10px 0',
                     color: 'white', backgroundColor: 'rgb(24 24 27)',
                     display: 'flex', justifyContent: 'center',
                     alignItems: 'center', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'
                 }}>
                <h1>Show Animal Widget</h1>
            </div>

            {/*Button*/}
            <div style={{
                padding: '20px 0 10px 0',
                // backgroundColor: 'rgb(24 24 27)',
                display: 'flex', justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Space
                    direction="vertical"
                    style={{
                        width: '50%',
                        // backgroundColor:'#fff',
                        zIndex: 1
                    }}
                >
                    <Button
                        type="primary"
                        block
                        danger={true}
                        onClick={handleOnClick}
                        style={{
                            zIndex: 10,
                            backgroundColor: '#1890ff',
                            color: 'whitesmoke'
                        }}
                    >
                        Add Animal
                    </Button>
                </Space>

            </div>

            {/*Divider*/}
            <div style={{width: '70%', display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
                <Divider orientation="center" plain>
                    {animals.length === 0 ? 'No Animal' : animals.length === 1 ? '1 Animal' : `${animals.length} Animals`}
                </Divider>
            </div>

            {/*Animal Cards*/}
            <div className={'flex flex-row flex-wrap p-8'}
                 style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {animals.map((img, index) => {
                    // extract animal name from img object
                    const str = `${img}`
                    const start = str.lastIndexOf('/') + 1;
                    const end = str.indexOf('.');
                    const str2 = str.substring(start, end);

                    return (
                        <div style={{padding: '10px'}} key={index}>
                            <Card
                                extra={<a href="#">More</a>}
                                hoverable
                                style={{width: 240}}
                                cover={<img alt={`${img}`} src={img} style={{objectFit: 'contain', height: '225px'}}/>}
                                loading={false}
                            >
                                <Meta
                                    title={str2}
                                />
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>

    )
        ;
};

export default AnimalWidget;
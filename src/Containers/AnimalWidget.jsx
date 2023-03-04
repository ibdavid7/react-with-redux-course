import React, { useState } from 'react';
import { Button, Space, Divider, Card } from 'antd';
import { bird, cat, cow, dog, gator, heart, horse } from '../Assets';

const { Meta } = Card;

const AnimalWidget = () => {


    const [heartSizeDefault, heartSizeIncrement] = [15, 10];

    const animalMap = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse,
    }
    const [animals, setAnimals] = useState([]);

    const handleOnClickAddAnimal = () => {
        const rand = Math.floor(Math.random() * (Object.keys(animalMap).length));
        setAnimals([...animals, { type: Object.keys(animalMap)[rand], img: Object.values(animalMap)[rand], heartSize: heartSizeDefault }]);
    }

    const handleOnClickLikeAnimal = (index) => {
        const nextAnimals = animals.map((animal, i) => {
            if (i === index && animal['heartSize'] < 180) {
                return { ...animal, heartSize: animal['heartSize'] + heartSizeIncrement };
            } else {
                return animal;
            }
        })
        setAnimals(nextAnimals);
    }

    return (

        <div className={'flex flex-col'}
            style={{
                display: 'flex', flexDirection: 'column',
                backgroundColor: 'rgb(249 250 251)',
                borderRadius: '10px', minWidth: '80%',
                paddingBottom: '20px', maxWidth: '80%',
                marginTop: '1rem'
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
                        danger={false}
                        onClick={handleOnClickAddAnimal}
                        style={{
                            zIndex: 10,
                            // backgroundColor: '#1890ff',
                            color: 'whitesmoke'
                        }}
                    >
                        Add Animal
                    </Button>
                </Space>

            </div>

            {/*Divider*/}
            <div style={{ width: '70%', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
                <Divider orientation="center" plain>
                    {animals.length === 0 ? 'No Animal' : animals.length === 1 ? '1 Animal' : `${animals.length} Animals`}
                </Divider>
            </div>

            {/*Animal Cards*/}
            <div className={'flex flex-row flex-wrap justify-center border'}
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                {animals.map((animal, index) => {

                    return (
                        <div style={{ padding: '10px' }} key={index}>
                            <Card
                                // extra={<a href="#">More</a>}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img
                                    alt={animal['type']}
                                    src={animal['img']}
                                    style={{ objectFit: 'contain', height: '225px', position: 'relative' }} />}
                                loading={false}
                                onClick={() => handleOnClickLikeAnimal(index)}
                            >
                                <div style={{ position: 'absolute', inset: 'auto 1rem 3rem auto' }}>
                                    <img src={heart}
                                        alt="heart"
                                        style={{ width: animal['heartSize'] + 'px' }}
                                    />
                                </div>
                                <Meta
                                    title={animal['type']}
                                />
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimalWidget;
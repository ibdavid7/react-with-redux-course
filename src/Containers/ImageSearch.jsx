import React, { useState } from 'react';
import { SearchBar } from '../Components';
import { Api } from '../Data';
import { Button, Space, Divider, Card } from 'antd';
const { Meta } = Card;


const ImageSearch = () => {


    const [response, setResponse] = useState([]);

    const handleOnSearch = async (searchString) => {

        const newResponse = await Api(searchString);

        setResponse(newResponse);
    }


    return (
        // Container
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
                <h1>Search Images</h1>
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
                    }}
                >
                    <SearchBar
                        onSearch={handleOnSearch}
                    />
                </Space>

            </div>

            {/*Divider*/}
            <div style={{ width: '70%', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
                <Divider orientation="center" plain>
                    {response.length === 0 ? '' : 'Images'}
                </Divider>
            </div>

            {/*Animal Cards*/}
            <div className={'flex flex-row flex-wrap justify-center border'}
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                {response.map((image, index) => {

                    return (
                        <div style={{ padding: '10px' }} key={image.id}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img
                                    alt={image.alt_description}
                                    src={image.urls.small}
                                    style={{ objectFit: 'contain', height: '225px', position: 'static' }} />}
                                loading={false}
                                onClick={() => { }}
                            >

                                <Meta
                                    title={image.alt_description}
                                />
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ImageSearch;

import React from 'react';
import {pda} from "../Data/dummy";
import {Avatar, Card} from 'antd';

const {Meta} = Card;

const Pdas = () => {
    return (

        <div className={'flex flex-col'}
             style={{
                 display: 'flex', flexDirection: 'column',
                 backgroundColor: 'rgb(249 250 251)',
                 borderRadius: '10px', minWidth:'80%',
                 paddingBottom:'20px'
             }}>
            <div className={'p-8 m-10 bg-slate-400'}
                 style={{
                     padding: '10px 0 10px 0',
                     color: 'white', backgroundColor: 'rgb(24 24 27)',
                     display: 'flex', justifyContent: 'center',
                     alignItems: 'center', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'
                 }}>
                <h1>Personal Digital Assistants</h1>
            </div>

            <div className={'flex flex-row flex-wrap p-8'}
                 style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {pda.map(({img, handle, title, description}, index) => {
                    return (
                        <div style={{padding: '10px'}} key={index}>
                            <Card
                                extra={<a href="#">More</a>}
                                hoverable
                                style={{width: 240}}
                                cover={<img alt={title} src={img} style={{objectFit: 'contain', maxHeight: '225px'}}/>}
                                loading={false}
                            >
                                <Meta
                                    title={title}
                                    handle={handle}
                                    description={description}
                                    avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
                                />
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Pdas;
import React from 'react';
import {pda} from "../Data/dummy";
import {Avatar,  Card} from 'antd';

const {Meta} = Card;

const Pdas = () => {
    return (

        <div className={'flex flex-col flex-wrap items-stretch'}>
            <div className={'flex flex-row grow-[10] border p-8 m-10'}>
                <h1>Personal Digital Assistants</h1>
            </div>

            <div className={'flex flex-row flex-wrap p-8'} style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
                {pda.map(({img, handle, title, description}, index) => {
                    return (
                        <div style={{padding: '10px'}}>
                        <Card
                            extra={<a href="#">More</a>}
                            key={index}
                            hoverable
                            style={{width: 240}}
                            cover={<img alt={title} src={img} style={{objectFit:'contain', maxHeight:'225px'}}/>}
                            loading={false}
                        >
                            <Meta
                                title={title}
                                handle={handle}
                                description={description}
                                avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
                            />
                            <div className="additional">
                                <p className="price">Price: 20$</p>
                                <p>Author: John Doe</p>
                            </div>
                        </Card>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Pdas;
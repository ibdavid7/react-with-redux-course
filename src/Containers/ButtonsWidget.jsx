import React from 'react';
import {Button} from "../Components";
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";

const ButtonsWidget = () => {
    return (
        <div className={'flex flex-col items-center'}>
            <div>
                <Button
                    primary
                    outline
                    onClick={() => console.log('Click!!')}
                    className={'mb-5'}
                >
                    <GoBell/>
                    Hello there!
                </Button>
            </div>
            <div>
                <Button
                    secondary
                    rounded
                >
                    <GoDatabase/>
                    Click Me</Button>
            </div>
            <div>
                <Button
                    success
                >
                    <GoCloudDownload/>
                    Buy Now
                </Button>
            </div>
            <div>
                <Button
                    warning
                    rounded
                >
                    <GoBell/>
                    Errors Found
                </Button>
            </div>
            <div>
                <Button
                    danger
                    outline
                >
                    <GoDatabase/>
                    Warning
                </Button>
            </div>
            <div>
                <Button
                    success
                    rounded
                >
                    <GoCloudDownload/>
                    Complete
                </Button>
            </div>
        </div>
    );
};

export default ButtonsWidget;
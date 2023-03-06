import './App.css';
import {Pdas, AnimalWidget, BookWidget, ImageSearch, SideBar} from "./Containers";
import {Button} from "./Components";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import {Accordion} from './Containers';
import {accordion} from "./Data/dummy";

function App() {

    return (
        <div className={'flex flex-col items-center'}>
            <Accordion items={accordion}/>
            {/*<SideBar/>*/}
            {/*<BookWidget/>*/}
            {/*<ImageSearch/>*/}
            {/*<Pdas/>*/}
            {/*<AnimalWidget/>*/}
        </div>
    );
}

export default App;

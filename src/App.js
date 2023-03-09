import './App.css';
import { Pdas, AnimalWidget, BookWidget, ImageSearch, SideBar } from "./Containers";
import { Button } from "./Components";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import { Accordion } from './Components';
import { accordion, dropdownData } from "./Data/dummy";
import { Dropdown } from './Components';
import { useState } from 'react';

function App() {

    const [dropdownSelection, setDropdownSelection] = useState(null);

    const handleDropdownSelection = (option) => {
        setDropdownSelection(option);
    }

    return (
        <div className={'flex flex-col items-center'}>
            <Dropdown options={dropdownData} value={dropdownSelection} onChange={handleDropdownSelection} />
            {/* <Accordion items={accordion}/> */}
            {/*<SideBar/>*/}
            {/*<BookWidget/>*/}
            {/*<ImageSearch/>*/}
            {/*<Pdas/>*/}
            {/*<AnimalWidget/>*/}
        </div>
    );
}

export default App;

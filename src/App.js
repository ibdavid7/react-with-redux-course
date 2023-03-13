import './App.css';
import { Pdas, AnimalWidget, BookWidget, ImageSearch, SideBar, ButtonsWidget } from "./Containers";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import { Accordion, Route, Link, Sidebar, Button } from './Components';
import { accordion, dropdownData } from "./Data/dummy";
import { useState } from 'react';
import {
    DropdownPage,
    ModalPage,
    TablePage,
    CounterPage,
    CounterPageReducer,
    CounterPageReducerImmer,
    PlaylistPage,
    CarWidget
} from './Pages';


function App() {

    const [dropdownSelection, setDropdownSelection] = useState(null);

    const handleDropdownSelection = (option) => {
        setDropdownSelection(option);
    }

    return (
        <div>
            <Sidebar />
            <div className={'flex flex-col items-center'}>

                <Route path={'/'}>
                    <DropdownPage />
                </Route>

                <Route path={'/accordion'}>
                    <Accordion items={accordion} />
                </Route>

                <Route path={'/buttons'}>
                    <ButtonsWidget />
                </Route>

                <Route path={'/modal'}>
                    <ModalPage />
                </Route>

                <Route path={'/table'}>
                    <TablePage />
                </Route>

                <Route path={'/counter'}>
                    <CounterPage />
                </Route>

                <Route path={'/counterreducer'}>
                    <CounterPageReducer />
                </Route>

                <Route path={'/counterreducerimmer'}>
                    <CounterPageReducerImmer/>
                </Route>

                <Route path={'/playlist'}>
                    <PlaylistPage/>
                </Route>

                <Route path={'/car'}>
                    <CarWidget/>
                </Route>

                {/* <DropdownPage /> */}
                {/* <Accordion items={accordion}/> */}
                {/*<SideBar/>*/}
                {/*<BookWidget/>*/}
                {/*<ImageSearch/>*/}
                {/*<Pdas/>*/}
                {/*<AnimalWidget/>*/}
            </div>
        </div>
    );
}

export default App;

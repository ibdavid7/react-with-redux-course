import './App.css';
import { Pdas, AnimalWidget, BookWidget, ImageSearch, SideBar, ButtonsWidget } from "./Containers";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import { Accordion, Route, Link, Sidebar, Button, SinglePostPage, PostList, AddPostForm } from './Components';
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
    CarWidget,
    PhotoWidget,
    PostWidget
} from './Pages';
import { fetchAuthors, store } from './Store';
import { BrowserRouter, Routes, Route as RrdRoute } from 'react-router-dom';
import Layout from './Layout/Layout';


store.dispatch(fetchAuthors());

function App() {

    const [dropdownSelection, setDropdownSelection] = useState(null);

    const handleDropdownSelection = (option) => {
        setDropdownSelection(option);
    }

    return (
        <div>
            <Sidebar />
            <div className={'flex flex-col items-center App'}>

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
                    <CounterPageReducerImmer />
                </Route>

                <Route path={'/playlist'}>
                    <PlaylistPage />
                </Route>

                <Route path={'/car'}>
                    <CarWidget />
                </Route>

                <Route path={'/photos'}>
                    <PhotoWidget />
                </Route>

                <Route path={'/posts'}>
                    <PostWidget />
                </Route>

                <Routes>
                    <RrdRoute path='/' element={<Layout />}>

                        <RrdRoute index element={PostList} />

                        <RrdRoute path='post'>
                            <RrdRoute index element={<AddPostForm />} />
                            <RrdRoute path=":postId" element={<SinglePostPage />} />
                        </RrdRoute>

                    </RrdRoute>
                </Routes>

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

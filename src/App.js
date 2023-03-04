import './App.css';
import {SearchBar} from './Components';
import {Pdas, AnimalWidget, BookWidget} from "./Containers";
import ImageSearch from './Containers/ImageSearch';
import {Api} from './Data';

function App() {

    return (
        <div className={'flex flex-col items-center'}>
            {/* <SearchBar /> */}
            <BookWidget/>
            {/*<ImageSearch/>*/}
            {/*<Pdas/>*/}
            {/*<AnimalWidget/>*/}
        </div>
    );
}

export default App;

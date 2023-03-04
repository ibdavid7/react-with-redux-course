import './App.css';
import {Pdas, AnimalWidget, BookWidget, ImageSearch} from "./Containers";

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

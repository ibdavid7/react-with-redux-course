import './App.css';
import { SearchBar } from './Components';
import { Pdas, AnimalWidget } from "./Containers";
import ImageSearch from './Containers/ImageSearch';
import { Api } from './Data';

function App() {

    const response = Api('cars');
    // console.log(response);

    return (
        <div className={'flex flex-col items-center'}>
            {/* <SearchBar /> */}
            <ImageSearch />
            <Pdas />
            <AnimalWidget />
        </div>
    );
}

export default App;

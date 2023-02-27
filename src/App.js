import './App.css';
import {Pdas, AnimalWidget} from "./Containers";

function App() {


    return (
        <div className={'flex flex-col items-center'}>
            <Pdas/>
            <AnimalWidget/>
        </div>
    );
}

export default App;

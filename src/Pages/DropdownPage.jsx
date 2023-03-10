import { dropdownData } from "../Data/dummy";
import { Dropdown, Link } from '../Components';
import { useContext, useState } from 'react';
import { useNavigationContext } from "../Hooks";



function DropdownPage() {

    const { currentPath } = useNavigationContext();

    const [dropdownSelection, setDropdownSelection] = useState(null);

    const handleDropdownSelection = (option) => {
        setDropdownSelection(option);
    }

    return (
        <div className={'flex flex-col items-center'}>
            <h1>{currentPath}</h1>
            <h1>Text</h1>
            <a href='/dashboard'>Dashboard</a>
            <Dropdown options={dropdownData} value={dropdownSelection} onChange={handleDropdownSelection} />

        </div>
    );
}

export default DropdownPage;
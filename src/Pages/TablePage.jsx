import React from 'react';
import { SortableTable } from '../Components';
import { tableData, tableConfig } from '../Data/dummy';


const TablePage = () => {

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <div>
            <SortableTable data={tableData} config={tableConfig} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage

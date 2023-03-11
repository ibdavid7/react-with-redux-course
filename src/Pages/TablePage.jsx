import React from 'react';
import { Table } from '../Components';
import { tableData, tableConfig } from '../Data/dummy';


const TablePage = () => {
    return (
        <div>
            <Table data={tableData} config={tableConfig} />
        </div>
    )
}

export default TablePage

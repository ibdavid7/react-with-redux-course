import React from 'react'

const Table = ({ data, config, keyFn }) => {


    const renderedRows = data.map((row, index) => {
        return (
            <tr key={keyFn(row)} className='border-b'>

                {config.map((col, index) => {
                    return (
                        <td key={'col' + index} className='p-3'>{col.render(row)}</td>
                    );
                })}
            </tr>
        );
    })

    const renderedHeaders = config.map((header, index) => {
        return <th key={index}>{header.label}</th>
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderedHeaders}
                </tr>
            </thead>

            <tbody>
                {renderedRows}
            </tbody>

        </table>
    )
}

export default Table

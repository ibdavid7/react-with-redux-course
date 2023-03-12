import React, {Fragment} from 'react'

const Table = ({data, config, keyFn}) => {

    // console.log(data);

    const renderedRows = data.map((row, index) => {

        return (
            <tr key={keyFn(row) + index} className='border-b'>

                {config.map((col, index) => {
                    return (
                        <td key={'col' + index} className='p-3'>{col.render(row)}</td>
                    );
                })}
            </tr>
        );
    })

    const renderedHeaders = config.map((col, index) => {
        return col.header ? <Fragment key={index}>{col.header(col)}</Fragment> : <th key={index}>{col.label}</th>
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

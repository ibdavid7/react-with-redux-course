import React, {useEffect, useState} from 'react';

const useSort = (data, config) => {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [updatedData, setUpdatedData] = useState([...data]);

    const sortData = (sortBy, sortOrder) => {
        if (!sortBy || !sortOrder) {
            return [...data];
        } else {
            const {sortValue} = config.find((col) => col.label === sortBy);

            return [...data].sort((o1, o2) => {
                const val1 = sortValue(o1);
                const val2 = sortValue(o2);
                const reverseOrder = sortOrder === 'desc' ? -1 : 1;
                // console.log(reverseOrder)
                // console.log(val1, ' ', val2)
                if (typeof val1 === 'string') {
                    return (val1.localeCompare(val2)) * reverseOrder;
                } else {
                    return (val1 - val2) * reverseOrder;
                }
            })
        }
    }

    const setSortColumn = (label) => {

        // clicking on same col -> cycle through sortOrder options
        if (label === sortBy) {
            setSortOrder((prevValue) => {
                if (!prevValue) {
                    return 'asc'
                } else if (prevValue === 'asc') {
                    return 'desc';
                } else {
                    setSortBy(null);
                    return null;
                }
            })
        } else {
            // clicking different col -> new sort
            setSortBy(label);
            setSortOrder('asc');
        }

    }

    useEffect(() => {
        setUpdatedData(sortData(sortBy, sortOrder));
    }, [sortBy, sortOrder])


    return ({
        sortBy,
        sortOrder,
        setSortColumn,
        updatedData,
    });
};

export default useSort;

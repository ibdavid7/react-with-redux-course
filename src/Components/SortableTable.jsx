import React, {useEffect, useState} from 'react';
import {Table} from "./index";
import {GoArrowSmallDown, GoArrowSmallUp, GoArrowBoth} from 'react-icons/go';
import {useSort} from "../Hooks";

const SortableTable = (props) => {

        const {config, data, ...rest} = props;

        const {
            sortBy,
            sortOrder,
            setSortColumn,
            updatedData
        } = useSort(data, config);


        const getIcons = (label, sortBy, sortOrder) => {
            if (label === sortBy) {
                return sortOrder === 'asc' ? <GoArrowSmallUp/> : <GoArrowSmallDown/>;
            } else {
                return (
                    <div>
                        <GoArrowSmallUp/>
                        <GoArrowSmallDown/>
                    </div>
                );
            }
        }

// add custom header for sortValue (sortable) columns => updateConfig object
        const updateConfig = config.map((col) => {
            if (!col.sortValue) return col;

            return ({
                ...col,
                header: (col) => <th
                    onClick={() => setSortColumn(col.label)}
                    className={'cursor-pointer hover:bg-gray-100'}
                >
                    <div className={'flex items-center'}>
                        {getIcons(col.label, sortBy, sortOrder)}
                        {col.label}
                    </div>
                </th>
            });
        })


        return (
            <div>
                <Table
                    config={updateConfig}
                    data={updatedData}
                    {...rest}
                />
            </div>
        );
    }
;


export default SortableTable;

"use client"
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../../../contexts/SecureContext";
import DataTable from 'react-data-table-component';
import {dummyElements} from "../../../../../constants/contants";

const ElementsPage = () => {
    const {
        appliedFilters,
        changeCurrentElementSelected
    } = useContext(SecureContext);
    const [data, setData] = useState([]);
    const columns = [
        {
            name: "Id",
            selector: row => row.id,
            grow: 0
        },
        {
            name: "Nombre",
            selector: row => <span className="text-blue-400
                underline
                cursor-pointer
                hover:opacity-75
                "
           onClick={() => {
               console.log("row", row)
               changeCurrentElementSelected(row);
           }}>
                {row.name}
            </span>,
            grow: 1
        },
        {
            name: "Grupo",
            selector: row => row.group_name,
            grow: 0
        },
        {
            name: "Cliente",
            selector: row => row.client_name,
            grow: 0
        },
        {
            name: "UA",
            selector: row => row.ua,
            grow: 0
        },
    ];

    const getData = async () => {
        setData(dummyElements);
    };

    useEffect(() => {
        getData();
    }, [appliedFilters]);

    return <div className="w-full flex flex-col h-full p-2 overflow-auto max-h-full">
        <div><span>Elementos</span></div>
        <DataTable
            columns={columns}
            data={data}
            pagination
            onRowClicked={(row, event) => {
                console.log({row, event});
                changeCurrentElementSelected(row);
            }}
        />
    </div>
}

export default ElementsPage;
"use client"
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../../../contexts/SecureContext";
import DataTable from 'react-data-table-component';
import {dummyTickets} from "../../../../../constants/contants";

const TicketsPage = () => {
    const {
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
            name: "Descripción",
            selector: row => <span className="text-blue-400
                underline
                cursor-pointer
                hover:opacity-75
                "
                onClick={() => {
                    changeCurrentElementSelected(row);
                }}>
                {row.description}
            </span>,
            grow: 1
        },
        {
            name: "Elemento",
            selector: row => <span className="text-blue-400
                underline
                cursor-pointer
                hover:opacity-75
                "
                onClick={() => {
                    changeCurrentElementSelected(row);
                }}>
                {row.element_name}
            </span>,
            grow: 1
        }
    ];

    const getData = async () => {
        setData(dummyTickets);
    };

    useEffect(() => {
        getData();
    }, []);

    return <div className="w-full flex flex-col h-full p-2 overflow-auto max-h-full">
        <div><span>Tickets</span></div>
        <DataTable
            columns={columns}
            data={data}
            pagination
            onRowClicked={(row, event) => {
                changeCurrentElementSelected(row);
            }}
        />
    </div>
}

export default TicketsPage;
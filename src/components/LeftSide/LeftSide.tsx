"use client"

import React, {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {HeaderBar} from "../HeaderBar/HeaderBar";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import {router} from "next/navigation";

interface LeftSideProps {
    children?: React.ReactNode
}

const dummyElements = [
    {
        id: 1,
        name: "Element 1",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/1"
    },
    {
        id: 2,
        name: "Element 2",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/2"
    },
    {
        id: 3,
        name: "Element 3",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/3"
    },
    {
        id: 4,
        name: "Element 4",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/4"
    },
    {
        id: 5,
        name: "Element 5",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/5"
    },
];
const dummyReports = [
    {
        id: 1,
        name: "Report 1",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/1"
    },
    {
        id: 2,
        name: "Report 2",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/2"
    },
    {
        id: 3,
        name: "Report 3",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/3"
    },
    {
        id: 4,
        name: "Report 4",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/4"
    },
    {
        id: 5,
        name: "Report 5",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/5"
    },
];

export const LeftSide = (
    {
        children
    }: LeftSideProps) => {
    const {
        currentSearch,
        changeOptionListSelected,
        lastCharTouched,
        otionListSeleted,
        currentFunctionality
    } = useContext(SecureContext);

    const [dataList, setDataList] = useState([]);

    const getDataList = () => {
        console.log("Hacer petición para traer la lista de la izquierda",currentSearch);
        //Se tendría que hacer peticion de lista de la izquierda que corresponda
        //al functionality current
        if(currentFunctionality.id === 2 /*reportes*/) {
            setDataList(dummyReports);
        }else {
            setDataList(dummyElements);
        }

    };


    useEffect(() => {
        if(lastCharTouched === "Enter") {
            getDataList();
        }
    }, [lastCharTouched]);

    useEffect(() => {
        getDataList();
    }, [currentFunctionality]);

    return (
        <div className="
                w-[400px]
                flex
                flex-col
                border-r
            ">
            <HeaderBar />
            <div className="
                w-full
                h-full
                overflow-auto
                min-h-[calc(100vh - 400px)]
            ">
                {
                    dataList.map(item => {
                        return <div key={item.id}
                            className={`
                                w-full
                                flex
                                items-center
                                h-[48px]
                                hover:opacity-75
                                cursor-pointer
                                ${+item.id === +otionListSeleted.id ? "bg-blue-600" : 
                                "hover:bg-gray-200"}
                            `}
                            onClick={() => {
                                changeOptionListSelected(item);
                            }}
                        >
                            <div className="w-1/4 flex justify-center items-center">{item.id}</div>
                            <div className="flex-1">{item.name}</div>
                            <div className="w-1/4 flex justify-center items-center">{item.ua}</div>
                        </div>
                    })
                }
            </div>
            <div className="
                h-[52px]
                w-full
                text-green-600
                text-5xl
                flex
                justify-center
                hover:text-white
                hover:bg-green-600
                cursor-pointer
                hover:ease-in
                p-1
            ">
                <FaPlus />
            </div>
        </div>
    )
}
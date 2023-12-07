"use client"

import React, {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {HeaderBar} from "../HeaderBar/HeaderBar";
import { FaPlusCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


interface LeftSideProps {
    children?: React.ReactNode
}

const dummyElements = [
    {
        id: 1,
        name: "Element 1",
        ua: "2hrs",
        icon: "",
        color: "green"
    },
    {
        id: 2,
        name: "Element 2",
        ua: "2hrs",
        icon: "",
        color: "green"
    },
    {
        id: 3,
        name: "Element 3",
        ua: "2hrs",
        icon: "",
        color: "green"
    },
    {
        id: 4,
        name: "Element 4",
        ua: "2hrs",
        icon: "",
        color: "green"
    },
    {
        id: 5,
        name: "Element 5",
        ua: "2hrs",
        icon: "",
        color: "green"
    },
];

export const LeftSide = (
    {
        children
    }: LeftSideProps) => {
    const {
        currentSearch,
        changeOptionListSelected,
        lastCharTouched
    } = useContext(SecureContext);

    const [dataList, setDataList] = useState([]);

    const getDataList = () => {
        console.log("Hacer petición para traer la lista de la izquierda",
            currentSearch);
        setDataList(dummyElements);
    };

    useEffect(() => {
        if(lastCharTouched === "Enter") {
            getDataList();
        }
    }, [lastCharTouched]);

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
                                    className="
                                    w-full
                                    flex
                                    items-center
                                    h-[48px]
                                    hover:opacity-75
                                    hover:bg-gray-200
                                    cursor-pointer
                                "
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
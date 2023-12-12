"use client"

import React, {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {HeaderBar} from "../HeaderBar/HeaderBar";
import { FaPlus } from "react-icons/fa";
import {Modal} from "@/components/Modal";
import {ListItemsBar} from "@/components/ListItemsBar/ListItemsBar";
import {LeftSideFooter} from "@/components/LeftSideFooter/LeftSideFooter";

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

const ModalChilds = {
    NewElement: <div>Element</div>,
    NewReport: <div>Report</div>
};

export const LeftSide = (
    {
        children
    }: LeftSideProps) => {
    const {
        currentSearch,
        changeOptionListSelected,
        lastCharTouched,
        optionListSeleted,
        currentFunctionality
    } = useContext(SecureContext);

    const [dataList, setDataList] = useState([]);
    const [newModalChild, setNewModalChild] = useState("NewElement");
    const [showNewModal, setShowNewModal] = useState(true);

    const getDataList = () => {
        //Se tendría que hacer peticion de lista de la izquierda que corresponda
        //al functionality current
        if(!!currentFunctionality  && currentFunctionality?.id === 2 /*reportes*/) {
            setDataList(dummyReports);
            setNewModalChild("NewReport");
        }else {
            setDataList(dummyElements);
            setNewModalChild("NewElement");
        }

    };

    const getModalChild = (componentType) => {
        return ModalChilds[componentType]
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
            <ListItemsBar
                list={dataList}
                optionListSeleted={optionListSeleted}
                changeOptionListSelected={(item: any) => {
                  changeOptionListSelected(item);
                }}
            />
            <LeftSideFooter onClickPlusBtn={() => {
                setShowNewModal(true);
            }} />

            <Modal
                title="Nuevo"
                isOpen={showNewModal}
                onChange={(isOpen) => {
                setShowNewModal(isOpen);
            }}>
                {
                    getModalChild(newModalChild)
                }
            </Modal>
        </div>
    )
}
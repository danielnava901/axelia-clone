"use client"

import React, {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {HeaderBar} from "../HeaderBar/HeaderBar";
import {Modal} from "@/components/Modal";
import {ListItemsBar} from "@/components/ListItemsBar/ListItemsBar";
import {LeftSideFooter} from "@/components/LeftSideFooter/LeftSideFooter";

interface LeftSideProps {
    children?: React.ReactNode
}


const ModalChilds = {
    NewElement: <div>Element</div>,
    NewReport: <div>Report</div>
};

export const LeftSide = (
    {
        children
    }: LeftSideProps) => {
    const {
        currentFunctionality,
    } = useContext(SecureContext);

    const [newModalChild, setNewModalChild] = useState("NewElement");
    const [showNewModal, setShowNewModal] = useState(false);


    const getModalChild = (componentType) => {
        return ModalChilds[componentType]
    };


    useEffect(() => {
    }, [currentFunctionality]);

    return (
        <div className="
                w-[220px]
                flex
                flex-col
                border-r
            ">
            <HeaderBar />
            <ListItemsBar />
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
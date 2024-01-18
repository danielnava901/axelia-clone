"use client";
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {elementTypes, tabsByElements} from "../../../constants/contants";
import Tabs from "../Tabs/Tabs";

export const TicketTabs = () => {
    const {
        currentElementSelected,
        changeCurrentElementSelected
    } = useContext(SecureContext);
    const [tabs, setTabs] = useState([]);
    const [urlSelected, setUrlSelected] = useState("/home");

    const getTabs = async () => {
        let newTabs = tabsByElements["TICKET"] || [];
        setTabs(newTabs);

        let url = newTabs?.find(tab => tab.selected)["path"]
            .replace("__ID__", `${currentElementSelected?.id}`) || "/home";
        setUrlSelected(url)
    }

    useEffect(() => {
        if(!!currentElementSelected) {
            getTabs();
        }
    }, []);


    return <Tabs
        tabs={tabs}
        onSetTabs={setTabs}
        urlSelected={urlSelected}
        onSetUrlSelected={setUrlSelected}
        onCloseTabs={() => {
            changeCurrentElementSelected(null)
        }}
    >
        <iframe
            className="
                    h-full
                    w-full
                    flex
                    "
            src={urlSelected} />
    </Tabs>
}
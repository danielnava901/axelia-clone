"use client";
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {elementTypes, tabsByElements} from "../../../constants/contants";
import Tabs from "@/components/Tabs/Tabs";

export const ElementTabs = () => {
    const {
        currentElementSelected,
        changeCurrentElementSelected
    } = useContext(SecureContext);
    console.log({
        initTab: tabsByElements[
            elementTypes[currentElementSelected?.element_type_id]
            ].find(tab => tab.selected)
    })
    const [tabs, setTabs] = useState([]);
    const [urlSelected, setUrlSelected] = useState("/home");
    const [tabSelected, setTabSelected] = useState(tabsByElements[
            elementTypes[currentElementSelected?.element_type_id]
        ].find(tab => tab.selected)
    );

    const getTabs = async () => {
        let newTabs = tabsByElements[elementTypes[currentElementSelected?.element_type_id]];
        setTabs(newTabs);
        let url = newTabs.find(tab => tab.selected)["path"]
            .replace("__ID__", `${currentElementSelected?.id}`) || "/home";
        console.log({elementUrl: url});
        setUrlSelected(url)
    }

    useEffect(() => {
        if(!!currentElementSelected) {
            getTabs();
        }
    }, []);

    const changeTabSelect = (tab) => {
        console.log("changeT", tab)
        setTabSelected(tab);
    };

    return <Tabs
        tabs={tabs}
        onSetTabs={setTabs}
        urlSelected={urlSelected}
        onSetUrlSelected={setUrlSelected}
        onCloseTabs={() => {
            changeCurrentElementSelected(null)
        }}
        tabSelected={tabSelected}
        onTabSelect={changeTabSelect}
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
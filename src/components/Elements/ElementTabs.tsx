"use client";
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {elementTypes, tabsByElements} from "../../../constants/contants";

export const ElementTabs = () => {
    const {
        currentElementSelected,
        changeCurrentElementSelected
    } = useContext(SecureContext);
    const [tabs, setTabs] = useState([]);
    const [urlSelected, setUrlSelected] = useState("/home");

    const getTabs = async () => {
        let newTabs = tabsByElements[elementTypes[currentElementSelected?.element_type_id]];
        setTabs(newTabs);
        let url = newTabs.find(tab => tab.selected)["path"]
            .replace("__ID__", `${currentElementSelected?.id}`) || "/home";
        setUrlSelected(url)
    }

    useEffect(() => {
        if(!!currentElementSelected) {
            getTabs();
        }
    }, []);


    return <>
        <div className="bg-white
            w-full
            h-full
            flex
            flex-col
            rounded-tl-lg
            rounded-bl-lg
            shadow-lg
            "
             onClick={(e) =>{
                 e.stopPropagation()
             }}
        >
            <div className="
                        h-12
                        bg-gray-200
                        rounded-tl-lg
                        flex
                        items-center
                        justify-between
                        ">
                <div className="flex h-12">
                    {
                        tabs.map((tab, index) => {
                            return <div key={index} className={`
                                    rounded-tl-lg  
                                    rounded-tr-lg      
                                    
                                    cursor-pointer
                                    hover:opacity-75
                                    hover:bg-gray-100
                                    border
                                    p-2
                                    flex 
                                    items-center
                                    justify-center
                                    min-w-20
                                    text-sm
                                    ${tab.selected ? "bg-blue-200" : ""}
                                    `}
                                    onClick={() => {
                                            let _tabs = [...tabs.map(t => {
                                                return {...t, selected: tab.id === t.id}
                                            })];
                                            setTabs(_tabs);
                                            setUrlSelected(tab.path.replace("__ID__", `${currentElementSelected?.id}`))
                                        }}
                            >
                                {tab.caption}
                            </div>
                        })
                    }
                </div>
                <div className="
                    mr-2
                    cursor-pointer
                    border
                    p-2
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    text-sm
                    hover:opacity-75
                    hover:bg-gray-100
                    "
                     onClick={() => {changeCurrentElementSelected(null)} }>&times;</div>
            </div>
            <div className="w-full h-full p-1">
                <iframe
                    className="
                    h-full
                    w-full
                    flex
                    "
                    src={urlSelected} />
            </div>
        </div>
    </>
}
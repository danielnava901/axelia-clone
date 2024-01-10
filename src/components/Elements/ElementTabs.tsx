"use client";
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
const dummyTabs = [
    {
        id: 1,
        caption: "Editar",
        path: "/elements/gps/__ID__",
        last_click: 1,
        selected: true
    },
    {
        id: 2,
        caption: "Mapa",
        path: "/elements/gps/__ID__",
        last_click: 1,
        selected: false
    }
];
export const ElementTabs = () => {
    const {
        currentElementSelected,
        changeCurrentElementSelected
    } = useContext(SecureContext);
    const [tabs, setTabs] = useState([]);
    const getTabs = async () => {
        await setTimeout(() => {}, 2000);
        setTabs(dummyTabs);
    }

    useEffect(() => {
        getTabs();
    }, []);


    return (
        <>
            {!!currentElementSelected ? <div className="
                backdrop-blur-sm
                bg-white/30
                ease-in-out
                duration-300
                translate-x-0
                w-full
                h-[calc(100vh-1px)]
                flex
                flex-col
                fixed
                l-0
                r-0
                b-0
                t-0
                py-4
                z-10
                "
                 onClick={() =>{
                     changeCurrentElementSelected(null);
                 }}
            >
                <div className="w-full
                h-full
                flex
                flex-col
                pl-24
                "
                >
                    <div className="
                    bg-white
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
                        ">
                            {
                                tabs.map((tab, index) => {
                                    return <div key={index} className={`
                                    mr-2
                                    p-1
                                    cursor-pointer
                                    hover:opacity-75
                                    border
                                    p-2
                                    flex 
                                    items-center
                                    justify-center
                                    min-w-12
                                    ${tab.selected ? "bg-blue-200" : ""}
                                    `}
                                    onClick={() => {
                                        let _tabs = [...tabs.map(t => {
                                            return {...t, selected: tab.id === t.id}
                                        })];
                                        setTabs(_tabs);
                                    }}
                                    >{tab.caption}</div>
                                })
                            }
                        </div>
                        <div className="w-full h-full p-4">
                            <iframe
                                className="
                                bg-red-200
                                h-full
                                w-full
                                flex
                                "
                                src="/home" ></iframe>
                        </div>
                    </div>

                </div>
            </div> : <div className="translate-x-full"></div>
            }
        </>
    )
}
"use client";
import {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";
import {ElementTabs} from "@/components/Elements/ElementTabs";
import {TicketTabs} from "@/components/Tickets/TicketTabs";
import Home from "@/app/home/page";
import ReportsTabs from "../Reportes/ReportsTabs";


const getComponent = (type, props = {}) => {
    console.log({type});
    switch(type) {
        case "home":
            return <Home />;
        case "element":
            return <ElementTabs {...props} />
        case "ticket":
            return <TicketTabs {...props} />
        case "report":
            return <ReportsTabs {...props} />
        default:
            return <Home />;
    }
}


export const SlidePanel = () => {
    const {
        currentElementSelected,
        changeCurrentElementSelected
    } = useContext(SecureContext);
    const [index, setIndex] = useState("home");

    const getData = async () => {
        setIndex(currentElementSelected?.type || "home");
    }

    useEffect(() => {
        if(!!currentElementSelected) {
            getData()
        }
    }, [currentElementSelected])

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

                z-10
                "
                onClick={() =>{
                    changeCurrentElementSelected(null);
                    setIndex("home");
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
                        {getComponent(index)}
                    </div>
                </div>
            </div> : <div className="translate-x-full"></div>
            }
        </>
    )
}
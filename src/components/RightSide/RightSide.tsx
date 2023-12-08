"use client"

import React, {useContext} from "react";
import SecureContext from "../../../contexts/SecureContext";

interface RightSideProps {
    children?: React.ReactNode
}

export const RightSide = (
    {children} : RightSideProps
) => {
    const {
        otionListSeleted
    } = useContext(SecureContext);

    return (
        <div className="
                h-full
                flex-1
                overflow-y-auto
                flex
                flex-col
            ">
            {children}
        </div>
    )
}
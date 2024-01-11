"use client"

import React from "react";

interface RightSideProps {
    children?: React.ReactNode
}

export const RightSide = (
    {children} : RightSideProps
) => {

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
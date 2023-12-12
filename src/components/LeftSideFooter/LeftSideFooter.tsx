import React from "react";
import {FaPlus} from "react-icons/fa";

interface LeftSideFooterProps {
    onClickPlusBtn: () => void
}

export const LeftSideFooter = (
    {
        onClickPlusBtn
    } : LeftSideFooterProps) => {
    return (
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
            "
             onClick={() => {
                 onClickPlusBtn();
             }}
        >
            <FaPlus />
        </div>
    )
}


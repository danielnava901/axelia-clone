import React from "react";

interface ListItemsBarProps {
    list: [any],
    optionListSeleted: any,
    changeOptionListSelected: (item: any) => void
}


export const ListItemsBar = (
    {
        list,
        optionListSeleted,
        changeOptionListSelected
    } : ListItemsBarProps) =>
{
    return (
        <div className="
                w-full
                h-full
                overflow-auto
                min-h-[calc(100vh - 400px)]
            ">
            {list.map((item) => {
                return <div key={item.id}
                    className={`
                        w-full
                        flex
                        items-center
                        h-[48px]
                        hover:opacity-75
                        cursor-pointer
                        ${+item.id === +optionListSeleted.id ? "bg-blue-600" :
                        "hover:bg-gray-200"}
                    `}
                    onClick={() => {
                        changeOptionListSelected(item);
                    }}
                >
                    <div className="w-1/4 flex justify-center items-center">{item.id}</div>
                    <div className="flex-1">{item.name}</div>
                    <div className="w-1/4 flex justify-center items-center">{item.ua}</div>
                </div>
            })}
        </div>
    )
}
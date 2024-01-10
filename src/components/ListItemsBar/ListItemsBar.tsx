import React, {useContext, useEffect, useState} from "react";
import SecureContext from "../../../contexts/SecureContext";

interface ListItemsBarProps {
    children?: React.ReactNode
}

export const ListItemsBar = (
    {
        children
    } : ListItemsBarProps) =>
{
    const [filtersSelected, setFiltersSelected] = useState([]);

    const {
        currentFilters,
        changeAppliedFilters
    } = useContext(SecureContext);

    useEffect(() => {
        changeAppliedFilters(filtersSelected);
    }, [filtersSelected])

    return (
        <div className="
                w-full
                h-full
                overflow-auto
                min-h-[calc(100vh - 400px)]
            ">
            <div className="w-full mb-2 flex flex-col">
                <span>Filtros</span>
                <div className="mx-2 flex w-full flex-wrap max-h-60 overflow-auto pr-4">
                    {
                        filtersSelected.map((filCurrent, indexCurrent) => {
                            return <div className={`
                                text-xs
                                hover:opacity-75
                                cursor-pointer
                                hover:bg-gray-200
                                p-1
                                rounded
                                w-fit
                                border
                                bg-gray-200
                                ml-1
                                mb-1
                                `}
                                key={indexCurrent}
                                onClick={() => {
                                    setFiltersSelected(filtersSelected.filter((item, index) => {
                                        return index !== indexCurrent
                                    }))
                                }}
                            >{filCurrent.option.name}</div>
                        })
                    }
                </div>
            </div>
            {
                currentFilters.filters.map((filter => {
                    return <div key={filter.header} className="w-full mb-2 flex flex-col p-1 rounded-lg">
                        <div className="font-bold text-md">{filter.header}</div>
                        <div className="w-full flex flex-col pl-3  max-h-60 overflow-auto bg-gray-100">
                            {
                                filter.options.map((option) => {
                                    return <div key={`${option.filter_id}-${option.id}`}
                                    className={`text-xs
                                        hover:opacity-75
                                        cursor-pointer
                                        hover:bg-gray-200
                                        p-1
                                        rounded
                                        w-fit
                                        
                                        ${!!filtersSelected.find(item => {
                                            return item.functionality_id === currentFilters.id &&
                                                item.filter_id === filter.id &&
                                                item.option_id === option.id 
                                            }) ? "line-through" : ""
                                        }
                                    `}
                                    onClick={() => {
                                        let selected = {
                                            functionality_id: currentFilters.id,
                                            filter_id: filter.id,
                                            option_id: option.id,
                                            option: option
                                        };

                                        let existIndex = -1;
                                        let exist = filtersSelected.find((fil, index) => {
                                            if(fil.functionality_id === selected.functionality_id &&
                                                fil.filter_id === selected.filter_id &&
                                                fil.option_id === selected.option_id) {
                                                existIndex = index;
                                                return true;
                                            }
                                            return false
                                        });

                                        if(!!exist) {
                                            setFiltersSelected(filtersSelected.filter((item, index) => {
                                                return index !== existIndex
                                            }))
                                        }else {
                                            setFiltersSelected([...filtersSelected, selected]);
                                        }
                                    }}>
                                        {option.name}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                }))
            }
        </div>
    )
}
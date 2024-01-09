"use client";

import SecureProviderContext from "../contexts/SecureContext";
import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation'
import {FilterCompleteItem, getFiltersByFunctionality} from "../constants/contants";


interface SecureProviderProps {
    children: React.ReactNode
}

const menuOptionList = [
    {id: 1, caption: "Elementos", path: "/elements/"},
    {id: 2, caption: "Reportes", path: "/reports/"},
    {id: 3, caption: "Tickets", path: "/tickets/"},
    {id: 4, caption: "Trip Check", path: "/tripCheck/"},
    {id: 5, caption: "GPS's", path: "/multipleSelect/"},
];

const SecureProvider = (
    {
        children
    } : SecureProviderProps) => {
    const [functionality, setFunctionality] = useState(menuOptionList[0]);
    const [search, setSearch] = useState("");
    const [lastChar, setLastChar] = useState("");
    const [optionListSelected, setOptionListSelected] = useState("");
    const [menuOptions, setMenuOptions] = useState<any>(menuOptionList);
    const [filters, setFilters] = useState<FilterCompleteItem>(getFiltersByFunctionality(menuOptions[0]));
    const router = useRouter()

    const onChangeFunctionality = (functionality) => {
        setFunctionality(functionality);
        setFilters(getFiltersByFunctionality(functionality));
    }

    const onChangeSearch = (functionality) => {
        setSearch(functionality);
    }

    const onChangeLastChar = (char : string) => {
        setLastChar(char);
    }

    const onChangeOptionListSelected = (obj : any) => {
        setOptionListSelected(obj);
        obj.path && router.push(obj.path);
    }

    const onChangeMenuOptions = (options : any) => {
        setMenuOptions(options);
    }

    useEffect(() => {
        /*Pide opciones del menú*/
    }, []);

    return <SecureProviderContext.Provider value={
        {
            currentFunctionality: functionality,
            changeFunctionality: onChangeFunctionality,
            currentSearch: search,
            changeCurrentSearch: onChangeSearch,
            lastCharTouched: lastChar,
            changeLastCharTouched: onChangeLastChar,
            optionListSeleted: optionListSelected,
            changeOptionListSelected: onChangeOptionListSelected,
            menuOptions: menuOptions,
            changeMenuOptions: onChangeMenuOptions,
            currentFilters: filters
        }
    }>
        {children}
    </SecureProviderContext.Provider>
}

export default SecureProvider;
"use client";

import SecureProviderContext from "../contexts/SecureContext";
import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation'


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
    const [functionality, setFunctionality] = useState(1);
    const [search, setSearch] = useState("");
    const [lastChar, setLastChar] = useState("");
    const [optionListSelected, setOptionListSelected] = useState("");
    const [menuOptions, setMenuOptions] = useState<any>(menuOptionList);
    const router = useRouter()

    const onChangeFunctionality = (functionality) => {
        setFunctionality(functionality);
    }

    const onChangeSearch = (functionality) => {
        setSearch(functionality);
    }

    const onChangeLastChar = (char : string) => {
        setLastChar(char);
    }

    const onChangeOptionListSelected = (obj : any) => {
        setOptionListSelected(obj);
        router.push(obj.path);
    }

    const onChangeMenuOptions = (options : any) => {
        setMenuOptions(options);
    }

    useEffect(() => {
        /*Pide opciones del menú*/
        onChangeMenuOptions([
            {id: 1, caption: "Elementos", path: "/elements/"},
            {id: 2, caption: "Reportes", path: "/reports/"},
            {id: 3, caption: "Tickets", path: "/tickets/"},
            {id: 4, caption: "Trip Check", path: "/tripCheck/"},
            {id: 5, caption: "GPS's", path: "/multipleSelect/"},
        ]);
    }, []);

    return <SecureProviderContext.Provider value={
        {
            currentFunctionality: functionality,
            changeFunctionality: onChangeFunctionality,
            currentSearch: search,
            changeCurrentSearch: onChangeSearch,
            lastCharTouched: lastChar,
            changeLastCharTouched: onChangeLastChar,
            otionListSeleted: optionListSelected,
            changeOptionListSelected: onChangeOptionListSelected,
            menuOptions: menuOptions,
            changeMenuOptions: onChangeMenuOptions
        }
    }>
        {children}
    </SecureProviderContext.Provider>
}

export default SecureProvider;
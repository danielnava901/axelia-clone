"use client";

import SecureProviderContext from "../contexts/SecureContext";
import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation'


interface SecureProviderProps {
    children: React.ReactNode
}

const SecureProvider = (
    {
        children
    } : SecureProviderProps) => {
    const [functionality, setFunctionality] = useState(1);
    const [search, setSearch] = useState("");
    const [lastChar, setLastChar] = useState("");
    const [optionListSelected, setOptionListSelected] = useState("");
    const [menuOptions, setMenuOptions] = useState([]);
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
        console.log("provider", obj);
        router.push(obj.path);
    }

    const onChangeMenuOptions = (options : any) => {
        setMenuOptions(options);
    }

    useEffect(() => {
        /*Pide opciones del menú*/
        onChangeMenuOptions([
            {id: 1, caption: "Elementos"},
            {id: 2, caption: "Reportes"},
            {id: 3, caption: "Tickets"},
            {id: 4, caption: "Trip Check"},
            {id: 5, caption: "GPS's"},
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
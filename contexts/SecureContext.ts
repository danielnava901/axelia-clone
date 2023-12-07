import {createContext, useContext} from "react";

type SecureProviderContextType = {
    currentFunctionality: {},
    changeFunctionality: (functionality: any) => void
    currentSearch: string,
    changeCurrentSearch: (search: string) => void,
    lastCharTouched: string,
    changeLastCharTouched: (char: string) => void,
    otionListSeleted: any,
    changeOptionListSelected: (obj: any) => void,
    menuOptions: [],
    changeMenuOptions: (options : any) => void
}


const SecureProviderContext = createContext<SecureProviderContextType>(
    {
        currentFunctionality: {},
        changeFunctionality: () => {},
        currentSearch: "",
        changeCurrentSearch: () => {},
        lastCharTouched: "",
        changeLastCharTouched: () => {},
        otionListSeleted: {},
        changeOptionListSelected: () => {},
        menuOptions: [],
        changeMenuOptions: () => {}
    }
);


export default SecureProviderContext;

import {createContext, useContext} from "react";

type SecureProviderContextType = {
    currentFunctionality: {},
    changeFunctionality: (functionality: any) => void
    currentSearch: string,
    changeCurrentSearch: (search: string) => void,
    lastCharTouched: string,
    changeLastCharTouched: (char: string) => void,
    optionListSeleted: any,
    changeOptionListSelected: (obj: any) => void,
    menuOptions: [],
    changeMenuOptions: (options : any) => void
}


const SecureProviderContext = createContext<SecureProviderContextType>(
    {
        currentFunctionality: {id: 1, caption: "Elementos", path: "/elements/"},
        changeFunctionality: () => {},
        currentSearch: "",
        changeCurrentSearch: () => {},
        lastCharTouched: "",
        changeLastCharTouched: () => {},
        optionListSeleted: {},
        changeOptionListSelected: () => {},
        menuOptions: [],
        changeMenuOptions: () => {}
    }
);


export default SecureProviderContext;

import {createContext} from "react";
import {FilterCompleteItem} from "../constants/contants";

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
    changeMenuOptions: (options : any) => void,
    currentFilters: FilterCompleteItem | [],
    appliedFilters: [],
    changeAppliedFilters: (obj: any) => void,
    currentElementSelected: any,
    changeCurrentElementSelected: (obj: any) => void
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
        changeMenuOptions: () => {},
        currentFilters: [],
        appliedFilters: [],
        changeAppliedFilters: () => {},
        currentElementSelected: null,
        changeCurrentElementSelected: () => {}
    }
);


export default SecureProviderContext;

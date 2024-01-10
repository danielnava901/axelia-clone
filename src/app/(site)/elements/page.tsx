"use client"
import {useContext, useEffect} from "react";
import SecureContext from "../../../../contexts/SecureContext";

const ElementsPage = () => {
    const {
        appliedFilters
    } = useContext(SecureContext);

    useEffect(() => {
        console.log("Pedir otra vez", appliedFilters)
    }, [appliedFilters]);
    return <div>
        Elementos index dummy {JSON.stringify(appliedFilters)}
    </div>
}

export default ElementsPage;
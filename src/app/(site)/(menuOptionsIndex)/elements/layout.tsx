import React, {useContext} from "react";
import SecureProvider from "../../../../../providers/SecureProvider";
import {LeftSide} from "@/components/LeftSide/LeftSide";
import {RightSide} from "@/components/RightSide/RightSide";
import {ElementTabs} from "@/components/Elements/ElementTabs";

interface SecureLoyoutProps {
    children: React.ReactNode
}

const SecureLayout = ({children}: SecureLoyoutProps) => {

    return <SecureProvider>
        <div className="
            flex
            h-full
        ">
            <LeftSide />
            <RightSide>
                {children}
            </RightSide>
            <ElementTabs />
        </div>
    </SecureProvider>
}

export default SecureLayout;
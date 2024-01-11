import React from "react";
import SecureProvider from "../../../providers/SecureProvider";
import {SlidePanel} from "@/components/SlidePanel/SlidePanel";

interface SecureLoyoutProps {
    children: React.ReactNode
}

const SecureLayout = ({children}: SecureLoyoutProps) => {

    return <SecureProvider>
        {children}
        <SlidePanel />
    </SecureProvider>
}

export default SecureLayout;
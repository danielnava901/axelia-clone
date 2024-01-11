import React from "react";
import {LeftSide} from "@/components/LeftSide/LeftSide";
import {RightSide} from "@/components/RightSide/RightSide";

interface SecureLoyoutProps {
    children: React.ReactNode
}

const Layout = ({children}: SecureLoyoutProps) => {

    return <div className="
            flex
            h-full
            w-full
        ">
        <LeftSide />
        <RightSide>
            {children}
        </RightSide>
    </div>
}

export default Layout;
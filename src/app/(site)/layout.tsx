import React, {useContext} from "react";
import SecureProvider from "../../../providers/SecureProvider";
import {LeftSide} from "../../components/LeftSide/LeftSide";
import {RightSide} from "../../components/RightSide/RightSide";

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
                derecha
            </RightSide>
        </div>
    </SecureProvider>
}

export default SecureLayout;
import React from "react";
import * as Dialog from '@radix-ui/react-dialog';
import {IoMdClose} from "react-icons/io";


interface ModalProps {
    title: string,
    description?: string,
    children: React.ReactNode,
    isOpen: boolean,
    onChange: (open: boolean) => void
}

export const Modal = (
    {
        title,
        children,
        isOpen,
        onChange,
        description
    } : ModalProps
) => {
    return (
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    className="
                        bg-neutral-900/90
                        backdrop-blur
                        fixed
                        inset-0
                        z-[1]
                    "
                />
                <Dialog.Content className="
                    fixed
                    drop-shadow-md
                    border
                    border-neutral-700
                    top-[50%]
                    left-[50%]
                    max-h-full
                    h-full
                    md:h-auto
                    md:max-h-[85vh]
                    w-full
                    md:w-[90vw]
                    md:max-w-[450px]
                    translate-x-[-50%]
                    translate-y-[-50%]
                    rounded-md
                    bg-white
                    p-[25px]
                    focus:outline-none
                    z-[2]
                ">
                    <Dialog.Title className="
                        text-xl
                        text-center
                        font-bold
                        mb-4
                    ">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="
                        mb-5
                        text-sm
                        leading-normal
                        text-center
                    ">
                        {description}
                    </Dialog.Description>
                    <di>
                        {children}
                    </di>
                    <Dialog.Close asChild onClick={() => {
                        onChange(!isOpen)
                    }}>
                        <button className="
                            text-neutral-400
                            hover:text-white
                            absolute
                            top-[10px]
                            right-[10px]
                            inline-flex
                            h-[24px]
                            w-[24px]
                            appearance-none
                            items-center
                            justify-center
                            rounded-full
                            focues:outline-none
                        ">
                            <IoMdClose/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import SecureContext from "../../../contexts/SecureContext";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './styles.module.css';
import {useContext} from "react";
import {useRouter} from "next/navigation";



export const HeaderBar = () => {
    const {
        menuOptions,
        changeFunctionality
    } = useContext(SecureContext);

    const router = useRouter();


    return (
        <NavigationMenu.Root className={styles.NavigationMenuRoot}>
            <NavigationMenu.List className={styles.NavigationMenuList}>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                        style={{fontSize: "24px"}}
                        className={styles.NavigationMenuTrigger}>
                        <GiHamburgerMenu />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={styles.NavigationMenuContent}>
                        <div className="
                            flex
                            justify-between
                            p-4
                            w-full
                            flex-wrap
                            text-sm
                        ">
                            {menuOptions.map(item => {
                                return <div className="
                                w-[64px]
                                h-[64px]
                                border
                                m-3
                                hover:opacity-75
                                cursor-pointer
                            "
                            onClick={() => {
                                router.push(item.path);
                                changeFunctionality(item);
                            }}
                            key={item.id}>
                                    {item.caption}
                                </div>
                            })}
                        </div>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="text-white w-full flex items-center text-xl ml-8">
                    <span>Axelia</span>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}
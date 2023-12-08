"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosRefresh } from "react-icons/io";
import { BsArrowsExpandVertical } from "react-icons/bs";
import SecureContext from "../../../contexts/SecureContext";

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './styles.module.css';
import {useContext, useEffect, useState} from "react";


export const HeaderBar = () => {
    const {currentSearch,
        changeCurrentSearch,
        changeLastCharTouched,
        menuOptions,
        changeFunctionality
    } = useContext(SecureContext);

    useEffect(() => {
        const keyDownHandler = event => {
            changeLastCharTouched(event.key);
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);
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
                                changeFunctionality(item);
                            }}
                            key={item.id}>
                                    {item.caption}
                                </div>
                            })}
                        </div>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="flex-1 w-full">
                    <input type="text"
                           className={styles.NavigationSearchInput}
                           value={currentSearch}
                           onChange={(ev) => {
                               changeCurrentSearch(ev.target.value);
                               changeLastCharTouched(ev.key)
                           }}
                    />
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                        asChild={false}
                        style={{fontSize: "24px"}}
                        className={styles.NavigationMenuTrigger}>
                        <IoIosRefresh  />
                    </NavigationMenu.Trigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger
                        asChild={false}
                        style={{fontSize: "24px"}}
                        className={styles.NavigationMenuTrigger}>
                        <BsArrowsExpandVertical />
                    </NavigationMenu.Trigger>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}
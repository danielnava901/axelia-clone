
const Tabs = ({
    tabs,
    onSetTabs,
    onSetUrlSelected,
    tabSelected,
    onTabSelect,
    onCloseTabs,
    children,
    urlSelected
}) => {
    return <div className="bg-white
            w-full
            h-full
            flex
            flex-col
            rounded-tl-lg
            rounded-bl-lg
            shadow-lg
            "
                onClick={(e) =>{
                    e.stopPropagation()
                }}
    >
        <div className="
                        h-12
                        bg-gray-200
                        rounded-tl-lg
                        flex
                        items-center
                        justify-between
                        ">
            <div className="flex h-12">
                {
                    tabs.map((tab, index) => {
                        return <div key={index} className={`
                                    rounded-tl-lg  
                                    rounded-tr-lg      
                                    
                                    cursor-pointer
                                    hover:opacity-75
                                    hover:bg-gray-100
                                    border
                                    p-2
                                    flex 
                                    items-center
                                    justify-center
                                    min-w-20
                                    text-sm
                                    ${tab.selected ? "bg-blue-200" : ""}
                                    `}
                                    onClick={() => {
                                        let _tabs = [...tabs.map(t => {
                                            return {...t, selected: tab.id === t.id}
                                        })];
                                        onSetTabs(_tabs);
                                        console.log({_tabs});
                                        onSetUrlSelected(tab.path.replace("__ID__",
                                            `${tabSelected?.id}`));
                                        onTabSelect(tab);
                                    }}
                        >
                            {tab.caption}
                        </div>
                    })
                }
            </div>
            <div className="
                    mr-2
                    cursor-pointer
                    border
                    p-2
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    text-sm
                    hover:opacity-75
                    hover:bg-gray-100
                    "
                 onClick={() => {onCloseTabs(null)} }>&times;</div>
        </div>
        <div className="w-full flex justify-end">
            <span onClick={() => {
                window.open(urlSelected, "_blank", "width=800,height=960")
            }}>open</span>
        </div>
        <div className="w-full h-full p-1">
            {children}
        </div>
    </div>
}

export default Tabs;
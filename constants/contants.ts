type OptionItem = {
    id: number|string,
    name: string,
    class?: string
};
type FilterItem = {
    id: number,
    header: string,
    options: [OptionItem],
    ajax?: string
};

export type FilterCompleteItem = {
    id: number,
    functionality: string,
    filters?: FilterItem[]
}

export type ElementItem = {
    id: number,
    name: string,
    ua: string,
    group_name: string,
    client_name: string,
    type: "element" | "report",
    element_type_id: number
}

export const dummyElements : ElementItem[] = [
    {
        id: 1,
        name: "Elemento 1",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 2,
        name: "Elemento 2 SITE",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 6
    },
    {
        id: 3,
        name: "Elemento 3",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 4,
        name: "Elemento 4",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 5,
        name: "Elemento 5",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 6,
        name: "Elemento 6",
        ua: "1 dia",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 7,
        name: "Elemento 7",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 8,
        name: "Elemento 8",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 9,
        name: "Elemento 9",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 10,
        name: "Elemento 10",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 11,
        name: "Elemento 1",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 12,
        name: "Elemento 2",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 13,
        name: "Elemento 3",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 14,
        name: "Elemento 4",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 15,
        name: "Elemento 5",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 16,
        name: "Elemento 6",
        ua: "1 dia",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 17,
        name: "Elemento 7",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 18,
        name: "Elemento 8",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id:19,
        name: "Elemento 9",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    },
    {
        id: 20,
        name: "Elemento 10",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA",
        type: "element",
        element_type_id: 4
    }
];

export const elementTypes = {
    1: "GUARD_MON",
    2: "PSA",
    3: "GUARD_CHECK",
    4: "GPS",
    6: "SITE"
};

export const tabsByElements = {
    "GPS": [
        {
            id: 1,
            caption: "Info",
            path: "/gps/__ID__",
            last_click: 1,
            selected: true
        },
        {
            id: 2,
            caption: "Mapa",
            path: "/gps/mapa/__ID__",
            last_click: 1,
            selected: false
        },
        {
            id: 3,
            caption: "Eventos",
            path: "/gps/eventos/__ID__",
            last_click: 1,
            selected: false
        },
        {
            id: 4,
            caption: "Comandos",
            path: "/gps/comandos/__ID__",
            last_click: 1,
            selected: false
        },
        {
            id: 5,
            caption: "Tickets",
            path: "/gps/tickets/__ID__",
            last_click: 1,
            selected: false
        }
    ],
    "SITE": [
        {
            id: 1,
            caption: "Info",
            path: "/site/__ID__",
            last_click: 1,
            selected: true
        },
        {
            id: 2,
            caption: "Eventos",
            path: "/site/eventos/__ID__",
            last_click: 1,
            selected: false
        }
    ],
    "TICKET": [
        {
            id: 1,
            caption: "Info",
            path: "/ticket/__ID__",
            last_click: 1,
            selected: true
        },
    ]
};

export const dummyReports = [
    {
        id: 1,
        title: "Report 1",
        type: "report",
    },
    {
        id: 2,
        title: "Report 2",
        type: "report",
    },
    {
        id: 3,
        title: "Report 3",
        type: "report",
    },
    {
        id: 4,
        title: "Report 4",
        type: "report",
    },
    {
        id: 5,
        title: "Report 5",
        type: "report",
    },
];

export const dummyTickets = [
    {
        id: 1,
        description: "Ticket 1",
        element_name: "Elemento 1",
        type: "ticket"
    },
    {
        id: 2,
        description: "Ticket 2",
        element_name: "Elemento 1",
        type: "ticket"
    },
    {
        id: 3,
        description: "Ticket 3",
        element_name: "Elemento 11",
        type: "ticket"
    },
    {
        id: 4,
        description: "Ticket 4",
        element_name: "Elemento 1431",
        type: "ticket"
    }
]

export const allFilters : FilterCompleteItem[] = [
    {
        id: 1,
        functionality: "elements",
        filters: [
            {
                id: 1,
                header: "Tipos de elementos",
                options: [
                    {id: 1, name: "Guard Monitor"},
                    {id: 2, name: "PSA"},
                    {id: 3, name: "Guard Check"},
                    {id: 4, name: "GPS"},
                    {id: 6, name: "Site"},
                ]
            },
            {
                id: 2,
                header: "Grupos",
                ajax: "",
                options: [
                    {id: 1, name: "Grupo pruebas"},
                    {id: 2, name: "TilPruebas"},
                    {id: 3, name: "Tilatina"},
                    {id: 4, name: "ZOtros"},
                    {id: 6, name: "ZPruebas"},
                    {id: 7, name: "Grupo pruebas"},
                    {id: 8, name: "TilPruebas"},
                    {id: 9, name: "Tilatina"},
                    {id: 10, name: "ZOtros"},
                    {id: 11, name: "ZPruebas"},
                    {id: 12, name: "Grupo pruebas"},
                    {id: 13, name: "TilPruebas"},
                    {id: 14, name: "Tilatina"},
                    {id: 15, name: "ZOtros"},
                    {id: 16, name: "ZPruebas"},
                ]
            },
            {
                id: 3,
                header: "Colores",
                options: [
                    {id: 'R', name: 'Rojo', class: "bg-red-400"},
                    {id: 'Y', name: 'Amarillo', class: "bg-yellow-400"},
                    {id: 'G', name: 'Verde', class: "bg-green-400"},
                    {id: 'Z', name: 'Gris', class: "bg-gray-200"},
                ]
            }
        ]
    },
    {
        id: 2,
        functionality: "report",
        filters: []
    },
    {
        id: 3,
        functionality: "tickets",
        filters: [
            {
                id: 2,
                header: "Grupos",
                ajax: "",
                options: [
                    {id: 1, name: "Grupo pruebas"},
                    {id: 2, name: "TilPruebas"},
                    {id: 3, name: "Tilatina"},
                    {id: 4, name: "ZOtros"},
                    {id: 6, name: "ZPruebas"},
                    {id: 7, name: "Grupo pruebas"},
                    {id: 8, name: "TilPruebas"},
                    {id: 9, name: "Tilatina"},
                    {id: 10, name: "ZOtros"},
                    {id: 11, name: "ZPruebas"},
                    {id: 12, name: "Grupo pruebas"},
                    {id: 13, name: "TilPruebas"},
                    {id: 14, name: "Tilatina"},
                    {id: 15, name: "ZOtros"},
                    {id: 16, name: "ZPruebas"},
                ]
            },
            {
                id: 3,
                header: "Colores",
                options: [
                    {id: 'R', name: 'Rojo', class: "bg-red-400"},
                    {id: 'Y', name: 'Amarillo', class: "bg-yellow-400"},
                    {id: 'G', name: 'Verde', class: "bg-green-400"},
                    {id: 'Z', name: 'Gris', class: "bg-gray-200"},
                ]
            }
        ]
    }
];

export const menuOptionList = [
    {id: 1, caption: "Elementos", path: "/elements"},
    {id: 2, caption: "Reportes", path: "/reports"},
    {id: 3, caption: "Tickets", path: "/tickets"},
    {id: 4, caption: "Trip Check", path: "/tripCheck"},
    {id: 5, caption: "GPS's", path: "/multipleSelect"},
];

export const getFiltersByFunctionality = (functionality) : FilterCompleteItem => {
    return allFilters.find((item) => {
        return item.id === functionality?.id
    });
}

export const getFunctionalityByPath = (path) => {
    return menuOptionList.find(item => item.path === path) ||
        {id: 1, caption: "Home", path: "/home"};
}
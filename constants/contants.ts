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

export const dummyElements = [
    {
        id: 1,
        name: "Elemento 1",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 2,
        name: "Elemento 2",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 3,
        name: "Elemento 3",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 4,
        name: "Elemento 4",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 5,
        name: "Elemento 5",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 6,
        name: "Elemento 6",
        ua: "1 dia",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 7,
        name: "Elemento 7",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 8,
        name: "Elemento 8",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 9,
        name: "Elemento 9",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 10,
        name: "Elemento 10",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 11,
        name: "Elemento 1",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 12,
        name: "Elemento 2",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 13,
        name: "Elemento 3",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 14,
        name: "Elemento 4",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 15,
        name: "Elemento 5",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 16,
        name: "Elemento 6",
        ua: "1 dia",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 17,
        name: "Elemento 7",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 18,
        name: "Elemento 8",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id:19,
        name: "Elemento 9",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    },
    {
        id: 20,
        name: "Elemento 10",
        ua: "5 dias",
        group_name: "Tilprueba",
        client_name: "TILATINA"
    }
];
export const dummyReports = [
    {
        id: 1,
        name: "Report 1",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/1"
    },
    {
        id: 2,
        name: "Report 2",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/2"
    },
    {
        id: 3,
        name: "Report 3",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/3"
    },
    {
        id: 4,
        name: "Report 4",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/4"
    },
    {
        id: 5,
        name: "Report 5",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/reports/5"
    },
];

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
        functionality: "reports",
        filters: []
    },
    {
        id: 3,
        functionality: "tickets",
        filters: []
    }
];

export const getFiltersByFunctionality = (functionality) : FilterCompleteItem => {

    return allFilters.find((item) => {
        return item.id === functionality?.id
    });
}


export const menuOptionList = [
    {id: 1, caption: "Elementos", path: "/elements/"},
    {id: 2, caption: "Reportes", path: "/reports/"},
    {id: 3, caption: "Tickets", path: "/tickets/"},
    {id: 4, caption: "Trip Check", path: "/tripCheck/"},
    {id: 5, caption: "GPS's", path: "/multipleSelect/"},
];
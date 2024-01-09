type OptionItem = {
    id: number,
    name: string
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
        name: "Tipos de elementos",
        path: null,
        options: [
            {
                id: 1001,
                name: "Guard Monitor",
                path: null,
            },
            {
                id: 1002,
                name: "PSA",
                path: null,
            },
            {
                id: 1003,
                name: "Guard Check",
                path: null,
            }
        ]
    },
    {
        id: 2,
        name: "Element 2",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/2"
    },
    {
        id: 3,
        name: "Element 3",
        ua: "2hrs",
        icon: "",
        color: "green",
        path: "/elements/gps/3"
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
                ]
            },
            {
                id: 3,
                header: "Colores",
                options: []
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
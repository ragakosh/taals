import type { Taal } from './types';
export const taals: Taal[] = [
    {
        "name": "Dadra",
        "beats": 6,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 4, "value": "0" }
        ],
        "notes": ["Dha", "Dhin", "Na", "Dha", "Tin", "Na"]
    },
    {
        "name": "Teentaal",
        "beats": 16,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 5, "value": "2" },
            { "beat": 9, "value": "0" },
            { "beat": 13, "value": "3" }
        ],
        "notes": [
            "Dha", "Dhin", "Dhin", "Dha",
            "Dha", "Dhin", "Dhin", "Dha",
            "Dha", "Tin", "Tin", "Ta",
            "Ta", "Dhin", "Dhin", "Dha"
        ]
    },
    {
        "name": "Jhaptal",
        "beats": 10,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 3, "value": "2" },
            { "beat": 6, "value": "0" },
            { "beat": 8, "value": "3" }
        ],
        "notes": [
            "Dhin", "Na", "Dhin",
            "Dhin", "Na",
            "Tin", "Na", "Dhin",
            "Dhin", "Na"
        ]
    },
    {
        "name": "Rupak",
        "beats": 7,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 4, "value": "2" },
            { "beat": 6, "value": "3" }
        ],
        "notes": ["Tin", "Tin", "Na", "Dhin", "Na", "Dhin", "Na"]
    },
    {
        "name": "Keherwa",
        "beats": 8,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 5, "value": "0" }
        ],
        "notes": ["Dha", "Ge", "Na", "Ti", "Na", "Ka", "Dhin", "Na"]
    },
    {
        "name": "Ektaal",
        "beats": 12,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 3, "value": "0" },
            { "beat": 5, "value": "2" },
            { "beat": 7, "value": "0" },
            { "beat": 9, "value": "3" },
            { "beat": 11, "value": "4" }
        ],
        "notes": [
            "Dhin", "Dhin", "Dha Ge",
            "Tit", "Tu", "Na", "Ka", "Ta",
            "Dha Ge", "Tit", "Tu", "Na"
        ]
    },
    {
        "name": "Deepchandi",
        "beats": 14,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 4, "value": "0" },
            { "beat": 7, "value": "X" },
            { "beat": 12, "value": "X" }
        ]
    },
    {
        "name": "Tilwada",
        "beats": 16,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 5, "value": "2" },
            { "beat": 9, "value": "0" },
            { "beat": 13, "value": "3" }
        ]
    },
    {
        "name": "Jhoomra",
        "beats": 14,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 4, "value": "2" },
            { "beat": 8, "value": "0" },
            { "beat": 11, "value": "3" }
        ]
    },
    {
        "name": "Dhamar",
        "beats": 14,
        "vibhag": [
            { "beat": 1, "value": "X" },
            { "beat": 6, "value": "2" },
            { "beat": 8, "value": "0" },
            { "beat": 11, "value": "3" }
        ]
    },
];
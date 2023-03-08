import { alexa, cortana, siri } from "../Assets";

export const pda = [
    { title: 'Alexa', handle: '@alexa99', img: alexa, description: "I'll help you buy stuff off Amazon" },
    { title: 'Cortana', handle: '@cortana12', img: cortana, description: "Personal assistant by Microsoft" },
    { title: 'Siri', handle: '@siri44', img: siri, description: "I don't get a lot of updates any more" },
];

export const accordion = [
    {
        label: 'Can I use React to build a project',
        content: 'React was created specifically to build SPA projects',
    }, {
        label: 'Can I use Angualar to build a project',
        content: 'Angular was created specifically to build SPA projects',
    }, {
        label: 'Can I use Vue to build a project',
        content: 'Vue was created specifically to build SPA projects',
    },
]

export const dropdownData = [
    {
        label: 'React',
        value: 0,
    }, {
        label: 'Angualar ',
        value: 1,
    }, {
        label: 'Vue',
        value: 2,
    },
]
interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "B2",
    description: "Good listening skills, stronger in writing than speaking, able to communicate effectively in professional contexts",
        show: true
    }
];

export default languages;
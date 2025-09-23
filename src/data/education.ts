interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
   
    {
        title: "Bachelor of Science in Computer Science",
        startDate: "2010-02-15",
        endDate: "2024-03-19",
        school: "Universidad Politécnica Territorial Andrés Eloy Blanco",
        location: "Venezuela",
        description: "",
        currentUni: false,
    },
];

export default education;
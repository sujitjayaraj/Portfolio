export interface Experience {
    id: number
    title: string
    company: string
    start: string
    end: string
}

const experience: Experience[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Innvendt Insights Inc.",
        start: "August 2022",
        end: "Present"
    },
    {
        id: 2,
        title: "Research Assistant",
        company: "University of Cincinnati",
        start: "July 2021",
        end: "July 2022"
    }
];

export default experience;
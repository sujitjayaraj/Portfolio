export interface Project {
    id: number
    name: string
    image?: string
    description: string
    tools: string[]
    code?: string
    demo?: string
}

const projects: Project[] = [
    {
        id: 1,
        name: "Customer Relationship Management (CRM) tool",
        description: "Implemented a Customer Relationship Management software with roles named employee, manager, owner and admin allowing reduction in data access time and enhanced employee productivity by developing city specific client search feature.",
        tools: ["Java", "Spring Boot", "Spring MVC", "Spring Data", "Spring Security", "Hibernate", "JUnit", "MySQL", "Git"],
        code: "https://github.com/sujitjayaraj/Customer-Relationship-Management",
    },
    {
        id: 2,
        name: "Instakilo",
        description: "A clone of the popular social media platform Instagram developed using Spring and React frameworks. Performs JSON Web Token (JWT) based authentication and allows users to post, comment and like posts as well as follow other users.",
        tools: ["Java", "Spring Boot", "Spring Data", "Spring Security", "React", "MySQL", "JWT"],
        code: "https://github.com/sujitjayaraj/Instakilo"
    }
];

export default projects;
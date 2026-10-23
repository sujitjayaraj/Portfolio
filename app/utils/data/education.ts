export interface Education {
    id: number
    title: string
    start: string
    end: string
    institution: string
    location: string
}

const education: Education[] = [
    {
        id: 1,
        title: "Master of Engineering in Computer Science",
        start: "August 2019",
        end: "May 2021",
        institution: "University of Cincinnati",
        location: "Cincinnati, Ohio, USA"
    },
    {
        id: 2,
        title: "Bachelor of Technology in Computer Science",
        start: "August 2015",
        end: "May 2019",
        institution: "Manipal Institute of Technology",
        location: "Manipal, Karnataka, India"
    },
    {
        id: 3,
        title: "High School",
        start: "April 2001",
        end: "May 2015",
        institution: "GEMS Modern Academy",
        location: "Dubai, United Arab Emirates"
    }
];

export default education;
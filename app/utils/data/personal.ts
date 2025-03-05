export interface Personal {
    name: string
    image: string
    designation: string
    description: string
    email: string
    address: string
    social: Record<string, string>
    resume: string
}

const personal: Personal = {
    name: "Sujit Jayaraj",
    image: "/me.jpeg",
    designation: "Software Engineer",
    description: "My name is Sujit Jayaraj, I am professional and enthusiastic software engineer with core skills in Java, JavaScript and Python. I love learning new technologies to build applications that improve the lives of people. I am a team player and I am always eager to learn from my peers and share my knowledge with them. Open to new opportunities and challenges that suits my skills and interests.",
    email: "contact@mail.sujitjayaraj.tech",
    address: "Bengaluru, Karnataka, India",
    social: {
        github: "https://github.com/sujitjayaraj",
        linkedin: "https://www.linkedin.com/in/sujit-jayaraj/",
        leetcode: "https://leetcode.com/u/sujitjayaraj235/",
        twitter: "https://x.com/StunninglySujit"
    },
    resume: "/resume.pdf"
}

export default personal;
import { Profile, Project, Skill, Experience, Education, Service, Testimonial } from "../types";

export const portfolioData = {
    profile: {
        id: 1,
        fullName: "Vishwanath Pented",
        tagline: "Motivated Java Developer",
        title: "Backend Developer (Java/Spring Boot)",
        bio: "Motivated Java Developer (2025 Graduate) with strong foundations in Core Java, OOP, DSA, SQL, Git, and backend development. Experienced in building small Java applications and practicing problem-solving. Seeking an opportunity to contribute to backend development roles and grow in a collaborative environment.",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop", // Keeping placeholder for now as user didn't provide image URL
        resumeUrl: "#",
        email: "vishupented04@gmail.com",
        phone: "+91 96637 29286",
        address: "Bengaluru, India",
        socialLinks: [
            { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" }, // Pending user URL
            { platform: "GitHub", url: "https://github.com", icon: "github" }        // Pending user URL
        ]
    } as Profile,

    skills: [
        { id: 1, name: "Java", category: "Language", icon: "java", proficiency: 90 },
        { id: 2, name: "Core Java", category: "Backend", icon: "java", proficiency: 85 },
        { id: 3, name: "Spring Boot", category: "Backend", icon: "spring", proficiency: 75 },
        { id: 4, name: "SQL/MySQL", category: "Database", icon: "mysql", proficiency: 80 },
        { id: 5, name: "DSA", category: "Fundamentals", icon: "code", proficiency: 70 },
        { id: 6, name: "Git/GitHub", category: "Tools", icon: "git", proficiency: 85 },
        { id: 7, name: "HTML/CSS/JS", category: "Frontend", icon: "html", proficiency: 60 },
        { id: 8, name: "OOP", category: "Fundamentals", icon: "code", proficiency: 90 },
    ] as Skill[],

    projects: [
        {
            id: 1,
            title: "Java Chatbot Application",
            description: "Developed a chatbot using Java, OOP, methods, loops, and conditional logic. Practiced programming fundamentals and structured code using classes and functions.",
            thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
            technologies: "Core Java, OOP",
            liveUrl: "",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Built a responsive personal portfolio using HTML5, CSS3, JavaScript. Applied web development basics and deployed the project online.",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            technologies: "HTML5, CSS3, JavaScript",
            liveUrl: "",
            githubUrl: "#"
        }
    ] as Project[],

    experience: [
        {
            id: 1,
            jobTitle: "Full Stack Java Development Trainee",
            company: "Tap Academy",
            duration: "Jul 2025 – Present",
            description: "Hands-on training in Java, OOP, JDBC, Spring Boot, Git, MySQL, HTML, CSS, JavaScript. Built mini back-end modules and practiced Git workflows.",
            companyLogo: ""
        },
        {
            id: 2,
            jobTitle: "Software Development Intern",
            company: "Varcons Technologies Pvt. Ltd",
            duration: "Jan 2025 – May 2025",
            description: "Worked on UI development using HTML5, CSS3, JavaScript. Collaborated with the team, handled tasks independently, and followed version control practices.",
            companyLogo: ""
        }
    ] as Experience[],

    education: [
        {
            id: 1,
            institutionName: "Smt. Kamala & Sri. Venkappa M Agadi College of Engineering",
            degree: "B.E. in Information Science and Engineering",
            timePeriod: "2021 – 2025",
            description: "CGPA: 7.68 / 10",
            institutionLogo: ""
        },
        {
            id: 2,
            institutionName: "Vidyanketan PU Science College",
            degree: "Pre-University Course (PUC)",
            timePeriod: "2020 – 2021",
            description: "Percentage: 89.04%",
            institutionLogo: ""
        }
    ] as Education[],

    services: [] as Service[],
    testimonials: [] as Testimonial[]
};

import { Profile, Project, Skill, Experience, Education, Service, Testimonial } from "../types";

export const portfolioData = {
    profile: {
        id: 1,
        fullName: "Vishwanath Pented",
        tagline: "Building Digital Experiences",
        title: "Full Stack Developer",
        bio: "I craft robust and scalable applications with modern technologies. Passionate about solving complex problems and delivering user-centric solutions.",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop", // Professional headshot placeholder
        resumeUrl: "#",
        email: "vishwanath.pented@example.com",
        phone: "+91 98765 43210",
        address: "Hyderabad, India",
        socialLinks: [
            { platform: "GitHub", url: "https://github.com", icon: "github" },
            { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
            { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
        ]
    } as Profile,

    skills: [
        { id: 1, name: "Java", category: "Backend", icon: "java", proficiency: 90 },
        { id: 2, name: "Spring Boot", category: "Backend", icon: "spring", proficiency: 85 },
        { id: 3, name: "React", category: "Frontend", icon: "react", proficiency: 80 },
        { id: 4, name: "Next.js", category: "Frontend", icon: "nextjs", proficiency: 75 },
        { id: 5, name: "TypeScript", category: "Language", icon: "typescript", proficiency: 70 },
        { id: 6, name: "PostgreSQL", category: "Database", icon: "postgresql", proficiency: 75 },
        { id: 7, name: "Docker", category: "DevOps", icon: "docker", proficiency: 60 },
        { id: 8, name: "AWS", category: "Cloud", icon: "aws", proficiency: 50 },
    ] as Skill[],

    projects: [
        {
            id: 1,
            title: "Hotel Inventory System",
            description: "A comprehensive dashboard for managing hotel bar inventory, featuring real-time tracking, forecasting, and simulation tools.",
            thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop", // Dashboard UI placeholder
            technologies: "Python, Streamlit, Pandas, Plotly",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "Full-featured e-commerce solution with cart management, payment integration, and admin dashboard.",
            thumbnail: "https://images.unsplash.com/photo-1556740758-90de2929450a?q=80&w=800&auto=format&fit=crop", // E-commerce UI placeholder
            technologies: "React, Node.js, MongoDB, Stripe",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Productivity tool for teams to organize tasks, track progress, and collaborate in real-time.",
            thumbnail: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop", // Task app UI placeholder
            technologies: "Next.js, Firebase, TailwindCSS",
            liveUrl: "#",
            githubUrl: "#"
        }
    ] as Project[],

    experience: [
        {
            id: 1,
            jobTitle: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            duration: "2021 - Present",
            description: "Leading the backend development team, architecting microservices, and mentoring junior developers.",
            companyLogo: ""
        },
        {
            id: 2,
            jobTitle: "Full Stack Developer",
            company: "Digital Innovations",
            duration: "2019 - 2021",
            description: "Developed and maintained multiple web applications using the MERN stack.",
            companyLogo: ""
        }
    ] as Experience[],

    education: [
        {
            id: 1,
            institutionName: "University of Technology",
            degree: "Master of Computer Science",
            timePeriod: "2017 - 2019",
            description: "Specialized in Software Engineering and Distributed Systems.",
            institutionLogo: ""
        },
        {
            id: 2,
            institutionName: "State College",
            degree: "Bachelor of Science in IT",
            timePeriod: "2013 - 2017",
            description: "Graduated with honors. President of the Coding Club.",
            institutionLogo: ""
        }
    ] as Education[],

    services: [] as Service[],
    testimonials: [] as Testimonial[]
};

import { Profile, Skill, Project, Experience, Education, Service, Testimonial, SocialLink } from '../types';

export const portfolioData = {
    profile: {
        fullName: "Vishwanath Pented",
        tagline: "Full Stack Developer | Java & Next.js Enthusiast",
        title: "Software Engineer",
        bio: "Passionate developer with expertise in building scalable web applications using modern technologies. I love solving complex problems and learning new skills.",
        profileImage: "/profile.jpg", // Placeholder - user should replace or I can use a generic one
        resumeUrl: "/Resumee.pdf",
        email: "vishwanath@example.com",
        phone: "+91 98765 43210",
        address: "Hyderabad, India",
        socialLinks: [
            { platform: "GitHub", url: "https://github.com/VishwanathPented", icon: "Github" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/vishwanathpented", icon: "Linkedin" } // Added example
        ]
    } as Profile,

    skills: [
        { id: 1, name: "Java", category: "Backend", proficiency: 90, icon: "Coffee" },
        { id: 2, name: "Spring Boot", category: "Backend", proficiency: 85, icon: "Server" },
        { id: 3, name: "Next.js", category: "Frontend", proficiency: 80, icon: "Globe" },
        { id: 4, name: "React", category: "Frontend", proficiency: 85, icon: "Code" },
        { id: 5, name: "TypeScript", category: "Language", proficiency: 75, icon: "FileCode" },
        { id: 6, name: "PostgreSQL", category: "Database", proficiency: 70, icon: "Database" },
    ] as Skill[],

    projects: [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "A fully responsive portfolio website built with Next.js and Tailwind CSS. Originally planned with a Spring Boot backend, converted to a performant static site.",
            thumbnail: "/project1.jpg", // Placeholder
            technologies: "Next.js, TailwindCSS, TypeScript, Framer Motion",
            liveUrl: "https://portfolio.example.com",
            githubUrl: "https://github.com/VishwanathPented/portfolio"
        },
        {
            id: 2,
            title: "E-commerce Platform",
            description: "A full-featured e-commerce application with product listing, cart functionality, and payment gateway integration.",
            thumbnail: "/project2.jpg", // Placeholder
            technologies: "Java, Spring Boot, React, MySQL",
            liveUrl: "",
            githubUrl: "https://github.com/VishwanathPented/ecommerce"
        }
    ] as Project[],

    experience: [
        {
            id: 1,
            jobTitle: "Software Engineer Intern",
            company: "Tech Solutions Inc.",
            duration: "Jan 2024 - Present",
            description: "Developed RESTful APIs using Spring Boot and optimized database queries. Collaborated with the frontend team to integrate APIs.",
            companyLogo: "/company1.png"
        }
    ] as Experience[],

    education: [
        {
            id: 1,
            institutionName: "University of Technology",
            degree: "Bachelor of Technology in Computer Science",
            timePeriod: "2020 - 2024",
            description: "Graduated with 8.5 CGPA. Active member of the Coding Club.",
            institutionLogo: "/uni.png"
        }
    ] as Education[],

    services: [
        {
            id: 1,
            title: "Web Development",
            description: "Building responsive and performant web applications using modern frameworks.",
            icon: "Globe"
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Designing scalable server-side architecture and APIs.",
            icon: "Server"
        }
    ] as Service[],

    testimonials: [] as Testimonial[]
};

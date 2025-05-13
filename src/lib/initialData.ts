
import { ResumeData } from "@/types/resume";

export const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Senior Frontend Developer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    city: "San Francisco",
    state: "CA",
    linkedin: "linkedin.com/in/johndoe",
    website: "johndoe.com"
  },
  summary: "Experienced frontend developer with 5+ years of expertise in building responsive web applications using React, TypeScript, and modern CSS frameworks. Passionate about creating intuitive user interfaces and optimizing application performance.",
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      bullets: [
        "Led frontend development for a SaaS platform used by 50,000+ users, improving page load times by 40%",
        "Implemented responsive designs and optimized for mobile, increasing mobile conversion rates by 25%",
        "Mentored a team of 5 junior developers, implementing code reviews and best practices"
      ]
    },
    {
      company: "Creative Web Agency",
      position: "Frontend Developer",
      location: "Boston, MA",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      bullets: [
        "Developed interactive UIs for 20+ client websites using React and modern CSS frameworks",
        "Collaborated with designers to implement pixel-perfect layouts and animations",
        "Reduced build times by 50% by optimizing webpack configuration and implementing code splitting"
      ]
    }
  ],
  education: [
    {
      institution: "Boston University",
      degree: "Bachelor of Science in Computer Science",
      location: "Boston, MA",
      startDate: "Sep 2014",
      endDate: "May 2018",
      gpa: "3.8/4.0"
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Git",
    "Webpack",
    "Jest",
    "Cypress"
  ],
  sectionOrder: ["personal", "summary", "experience", "education", "skills"]
};

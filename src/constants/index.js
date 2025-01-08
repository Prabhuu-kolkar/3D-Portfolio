import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Front-end Developer",
      company_name: "@Artsy Technology Pvt Ltd.",
      
      iconBg: "#383E56",
      date: "Jul 2024 - Nov 2024",
      points: [
        "Worked with clients and stakeholders to design and implement responsive, user-centric websites using React, ensuring seamless navigation and accessibility.",
        "Improved and integrated features like CMS and APIs optimizing performance for speed, security, and cross-device compatibility.",
        "Provided post-launch support, including maintenance, feature updates, and performance enhancements to meet evolving user and business needs.",
        
      ],
    },
        {
      title: "FreeLancer",
      company_name: "Tiqva | UK",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Jun 2024",
      points: [
        "Implemented MVPs (Minimum Viable Products) for clients, including interactive dashboards, e-Commerce solutions, and user authentication systems, allowing efficient idea validation.",
        "Contributed with a company’s engineering team to maintain and improve platform performance by implementing new features such as dynamic forms, responsive layouts, real-time data updates using Web Sockets, and optimized API integrations.",
        "Supported individuals in building side projects, providing guidance on best practices for React, state management (e.g., Redux or Context API), and component re-usability to enhance project quality and scalability",
      ],
    },

       {
      title: "Frontend Developer",
      company_name: "Null Class",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Enhanced the initial project by adding new features.",
        "Encouraged self-reliance and problem-solving",
        "Implemented an OTP feature with Twilio, worked perfectly in the development environment.",
      ],
    },
      
    {
      title: "Cloud Computing-AWS",
      company_name: "Tech-Trunk Ventures ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Sep 2023",
      points: [
        "Designed, deployed, and managed scalable cloud infrastructure using AWS services like EC2, S3, RDS and Lambda.",
        "I automated deployments with CloudFormation, integrated cloud solutions with development teams and ensured security best practices.",
        "Also monitored and resolved infrastructure issues to maintain high availability",
       
      ],
    },
   
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Prabhu proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Prabhu does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Prabhu optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };

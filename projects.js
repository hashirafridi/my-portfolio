// projects.js
const projectsData = [
  {
    id: "quantum-store",
    title: "Quantum Store",
    description: "Quantum Store is a full-stack, Steam-like web application built with React.js, Node.js, and CSS Modules. It allows users to browse and download games with advanced filters, view detailed game info, and get smart recommendations based on their hardware. A unique Game Compatibility Assistant analyzes the user's system to predict performance (smooth, laggy, or unsupported). The platform includes a secure role-based auth system for admins, game creators, and users, along with a powerful admin panel for managing games, users, and content. Users can also rate and review games, manage their game library, and customize their gamer profile.",
    technologies: ["React", "Node.js","Express.js", "MongoDB","CSS Modules"],
    thumbnail: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "images/q1.png",
      "images/q2.png",
      "images/q3.png",
      "images/q4.png",
      "images/q5.png",
      "images/q6.png",
      "images/q7.png",
      "images/q8.png",
      "images/q9.png"
    ]
  },
  {
    id: "msgmystry",
    title: "MsgMystry",
    description: "A feedback system where you can send messages to anybody and receive anonymous feedback with OpenAI integration for sentiment analysis.",
    technologies: ["Next.js", "OpenAI API", "Tailwind Css","React.js"],
    thumbnail: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      
    ]
  },
  {
  id: "eduai",
  title: "EduAI",
  description: "EduAI is an AI-driven e-learning platform designed to provide affordable, personalized, and accessible education to students and professionals across Pakistan. The system supports competitive exam preparation (MDCAT, CSS, NTS, etc.), skill-building courses, and instructor-led content delivery using modern web technologies.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React.js", "Material UI", "Node.js", "Express.js", "MongoDB", "JWT"],
  thumbnail: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  images: [
    "images/ui1.jpg",
"images/ui2.jpg",
"images/ui3.jpg",
"images/ui4.jpg",
"images/ui5.jpg",
"images/ui6.jpg",
"images/ui7.jpg",
"images/ui8.jpg",
  ]
},
  {
    id: "bankist",
    title: "Bankist",
    description: "A bank management web application with transaction tracking, user accounts, loan management, and financial analytics.",
    technologies: ["JavaScript", "HTML/CSS", "Node.js","Express.js"],
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
   
    ]
  },
  {
    id: "bookbite",
    title: "BookBite",
    description: "BooknBite is a modern restaurant platform where users can order food, book tables, and explore a rich menu featuring breakfast, lunch, dinner, desserts, and tea. It includes a powerful admin system to manage users, menus, bookings, orders, feedback, service requests, stock, billing (with smart bill splitting), and more — everything needed for seamless restaurant operations. With real-time order tracking, detailed dashboards, and intuitive table management, BooknBite brings efficiency to the kitchen and convenience to the customer. Perfect for restaurants that want to elevate both service and control.",
    technologies: ["React", "Node.js", "MySQL","CSS Modules"],
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "images/r11.jpg",
"images/r2.jpg",
"images/r3.jpg",
"images/r4.jpg",
"images/r5.jpg",
"images/r6.jpg",
"images/r7.jpg",
"images/r8.jpg",
"images/r9.jpg",
"images/r10.jpg",
"images/r12.jpg",
"images/r13.jpg",

    ]
  },
  {
    id: "eduportal",
    title: "EduPortal",
    description: "A modern, all-in-one educational management portal designed for schools, colleges, and universities. Built with Next.js, React, and Tailwind CSS on the frontend and Node.js on the backend, this platform delivers seamless performance and scalability. It features powerful modules like student attendance tracking, grade and result management, teacher/admin panels, assignment handling, syllabus tracking, and a dynamic dashboard showing complete student profiles. With a secure and role-based authentication system, each user—student, teacher, or admin—gets personalized access and control. EduPortal simplifies academic operations while enhancing communication between staff, students, and administrators.",
    technologies: ["Next.js", "Tailwind","TypeScript","Tailwind CSS","Node.js","Express.js"],
    thumbnail: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "images/u1.png",
    "images/u2.png",
    "images/u3.png",
    "images/u4.png",
    "images/u5.png",
    "images/u6.png",
    "images/u7.png",
    "images/u8.png",
    "images/u9.png",
    "images/u10.png",
    "images/u11.png",
    "images/u12.png",
    "images/u13.png"
    ]
  },
  {
  id: "petifyde",
  title: "Petifyde App",
  description: "I built only the backend for Petifyde App – an AI-powered platform where users can upload pet images to detect possible diseases and book vet appointments along with other pet-related features. The backend was developed with Node.js and Express.js, handling APIs, authentication, and integration with an external detection service. The system ensures smooth data flow, secure communication, and reliable performance.",
  technologies: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  thumbnail: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?auto=format&fit=crop&w=800&q=80",
  images: [
    "images/n1.jpg",
"images/n2.jpg",
"images/n3.jpg",
"images/n4.jpg",
"images/n5.jpg",
"images/n6.jpg",
"images/n7.jpg",
"images/n8.jpg",
"images/n9.jpg",
"images/n10.jpg",
"images/n11.jpg",
"images/n12.jpg",
"images/n13.jpg"
  ]
},
  {
    id: "cabinbooker",
    title: "CabinBooker",
    description: "A cabin booking system with property listings, availability calendar, online reservations, and payment processing for vacation rentals.",
    technologies: ["React","Node.js", "Express.js", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
    
    ]
  }
];


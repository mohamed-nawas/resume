const Projects: Record<string, Project> = {
    'order-uk': {
        mainImg: 'images/order-uk-image-3.png',
        title: "Order UK",
        slug: "E-Commerce | Fullstack",
        role: "Fullstack Engineer",
        teamSize: "Solo Project",
        tools: ["React", "TypeScript", "Nodejs", "Figma", "AWS", "Docker"],
        description: "Order UK is a convenient online service that helps customers in Sri Lanka order products directly from the United Kingdom. It simplifies the process of shopping for UK goods by allowing users to place orders through the website, after which the items are sourced, shipped, and delivered locally. The service is designed to make UK brands and products more accessible to Sri Lankan customers, saving them time and effort while offering trusted delivery. It’s ideal for those seeking international quality without the hassle of international logistics",
        images: ['images/order-uk-1.png', 'images/order-uk-2.png', 'images/order-uk-3.png', 'images/order-uk-4.png', 'images/order-uk-5.png', 'images/order-uk-6.png'],
        problems: ['Simplified the grocery ordering process', 'Improved accessibility for mobile users'],
        decisions: ['Focused on a clean layout and prominent call to actions'],
        challenges: ['Optimizing the UI for both desktop and mobile devices', 'Created responsive layouts and conducted usability testing'],
        outcomes: ['Decreased drop off rate', 'Increased conversion rate by 20%'],
        demo: 'https://mohamed-nawas.github.io/order-uk',
        repo: 'https://github.com/mohamed-nawas/order-uk'
    },
    'swivel-tech': {
        mainImg: 'images/swivel-tech-image-1.png',
        title: "Swivel Tech",
        slug: "Software Consultancy | Backend",
        role: "Backend Engineer",
        teamSize: "5+ Developers",
        tools: ["React", "TypeScript", "Spring Boot", "AWS", "Docker", "Figma", "Jira"],
        description: "Swivel Tech is an Australian-based software consultancy that specializes in building innovative, world-class products for a global clientele. The company offers services including enterprise software development, mobile application development, UX/UI design, and staff augmentation. With a team of dynamic professionals, Swivel Tech collaborates with clients across various industries to deliver scalable and efficient digital solutions",
        images: ['images/swivel-tech-1.png', 'images/swivel-tech-2.png', 'images/swivel-tech-3.png', 'images/swivel-tech-4.png', 'images/swivel-tech-5.png', 'images/swivel-tech-6.png', 'images/swivel-tech-7.png', 'images/swivel-tech-8.png', 'images/swivel-tech-9.png', 'images/swivel-tech-10.png', 'images/swivel-tech-11.png'],
        problems: [
            'Integrating diverse technologies to create seamless solutions',
            'Ensuring scalability and performance across global deployments'
        ],
        decisions: [
            'Adopted a microservices architecture to enhance modularity',
            'Utilized AWS cloud services for reliable and scalable infrastructure'
        ],
        challenges: [
            'Coordinating development efforts across multiple time zones',
            'Maintaining consistent code quality and performance standards'
        ],
        outcomes: [
            'Successfully delivered multiple enterprise-level applications',
            'Enhanced client satisfaction through timely and efficient project execution'
        ],
        demo: 'https://www.swiveltech.io/',
        repo: ''
    },
}

export default Projects;
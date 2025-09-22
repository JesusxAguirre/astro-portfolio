export const SITE = {
    website: "https://simple-portfolio.vicbox.dev", // replace this with your deployed domain
    title: "Simple Portfolio",
    description: "A simple but beautiful portfolio created with Astro",
    tags: ["portfolio", "Resume cv", "Astro"],
    ogImage: "/og-image.webp",
    logo: "logo",
    logoText: "Portfolio",
    lang: "en",
    favicon: "/favicon.png",
    repository: "https://github.com/JesusxAguirre/astro-portfolio",
    author: "Jesus Aguirre",
    profile: "https://jesusaguirre.dev/",
}

export const ME = {
    name: "Jesus Aguirre",
    profession: "Software Engineer | Flutter developer",
    profileImage: "profile.png",
    profileFacts: [
        {
            value: 2,
            description: "Years of Experience"
        },
        {
            value: 5,
            description: "Completed Projects"
        },
        {
            value: 7,
            description: "Satisfied Clients"
        }
    ],
    contactInfo: {
        email: "jesus.appdev@gmail.com",
        linkedin: "https://www.linkedin.com/in/jesusaguirrebastidas",
        resumeDoc: "resume.pdf",
    },
    aboutMe: "Mobile Developer specialized in Flutter, with proven experience delivering high-performance cross-platform apps to production." + "Strong expertise in secure authentication (Google, Apple, Email), real-time features, push notifications (Firebase FCM), and geolocation services with Google Maps SDK or Mapbox SDK." + "Hands-on experience in CI/CD automation with Codemagic, streamlining delivery pipelines and successfully publishingapps on both App Store and Play Store."
}

export const SOCIALS = [
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/jesusaguirrebastidas",
    icon: "linkedin-x-fill",
        show: true
    },
    {
        name: "GitHub",
        url: "https://github.com/JesusxAguirre",
        icon: "github-fill",
        show: true
    }
]
/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
    // {
    //     title: "Freelancer Flutter Senior Developer",
    //     startDate: "2025-07-5"
    //     ,
    //     endDate: "2025-09-30",
    //     company: "Civita Technologies",
    //     location: "Dublin, Ireland",
    //     description: "Developed and maintained mobile app using Flutter.",
    //     goals: [
    //         "Developed a booking mobile app from scratch using Flutter + Bloc, achieving a scalable and maintainable architecture that improved development speed by 30%.",
    //         "Implemented secure authentication with JWT, Google, Apple, and Email Sign-In, including password recovery via deep links, increasing user login success rate by 25%.",
    //         "Integrated Google Maps SDK with real-time navigation, custom markers (linked to backend venues), and route drawing, enhancing geolocation accuracy and boosting user engagement by 40%",
    //         "Built an in-app AI-powered chat (backend-driven) with WebSockets, reducing user support requests by 20%",
    //         "Automated delivery pipelines with Codemagic CI/CD, successfully publishing the app to App Store and Play Store with zero critical release issues",
    //     ],
    //     currentJob: false,
    // },
    {
        title: "Senior Mobile Engineer",
        startDate: "2024-04-1",
        endDate: "2025-09-1",
        company: "A4agro",
        location: "Venezuela",
        description: "Developed and maintained mobile app applications using Flutter.",
        goals: [
            "Enabled real-time agricultural monitoring for 20 farmers across 1,000+ hectares by building a Flutter + BLoC offline-first app with Firestore sync, reducing report delivery time from 3 weeks to 1–3 days",
            "Implemented offline maps and interactive farm/sublot layers with Mapbox, allowing precise location tracking of activities and monitoring sessions",
            "Delivered instant crop alerts and activity updates via Firebase FCM, enabling farmers to make timely decisions on labor and resource allocation",
            "Designed modular Activities and Monitoring workflows, providing a clear, structured process for planning and tracking crop cycles.",
            "Automated CI/CD workflows with Codemagic, streamlining delivery pipelines and ensuring consistent releases on App Store and Play Store",
            "Created multi-farm management and producer switching features, giving agronomists and farmers immediate access to all relevant farms and plots",
        ],
        currentJob: false,
    },
    {
        title: "Mid Full-stack Engineer",
        startDate: "2023-10-1",
        endDate: "2024-04-1",
        company: "A4agro",
        location: "Venezuela",
        description: "Developed and maintained backend APIS with microservices arquitecture",
        goals: [
            "Built a livestock management app with Flutter + Drift/SQLite, improving field data availability by 35%.",
            "Developed NestJS microservices with NATS, Dockerized for AWS, enabling scalable pipelines.",
            "Strengthened network reliability with Dio, reducing API errors by 20% in poor connectivity",
        ],
        currentJob: false,
    },
    // {
    //     title: "Jr. Full-stack Engineer",
    //     startDate: "2023-06-1",
    //     endDate: "2023-09-1",
    //     company: "Intercom Servicios",
    //     location: "Venezuela",
    //     description: "Developed and maintained backend APIS with microservices arquitecture",
    //     goals: [
    //         "I applied the Abstract Factory design pattern to standardize and optimize commands across different OLT systems, enhancing operational efficiency",
    //         "I implemented tailored CRM solutions for Internet service providers, integrating functionalities with Google Maps for accurate fiber optic service"
    //     ],
    //     currentJob: false,
    // },
];
export default workExperience;
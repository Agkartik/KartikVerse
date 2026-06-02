import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "mediconnect",
    name: "MediConnect+",
    theme: "Healthcare Civilization",
    category: "Healthcare",
    description: "A comprehensive telemedicine and hospital management platform connecting patients, doctors, and administrators through a unified ecosystem.",
    featured: true,
    complexityScore: 9,
    metrics: [
      { label: "Interactive Dashboards", value: "3" },
      { label: "Security", value: "Face Verification" },
      { label: "Consultations", value: "WebRTC Video" },
      { label: "Payments", value: "Razorpay" }
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "WebRTC", "Socket.io", "TailwindCSS"],
    architecture: {
      frontend: ["Next.js App Router", "Zustand State", "TailwindCSS", "Framer Motion"],
      backend: ["Node.js Express", "Socket.io", "JWT Auth", "Razorpay Webhooks"],
      database: ["MongoDB Atlas", "Mongoose Schemas", "Redis Caching"],
      aiLayer: ["Gemini Medical Assistant", "Symptom Analyzer"]
    },
    screenshots: [
      { image: "/placeholder-mediconnect-1.webp", caption: "Patient Dashboard & Real-time Vitals" },
      { image: "/placeholder-mediconnect-2.webp", caption: "Doctor Video Consultation Room" }
    ],
    githubUrl: "https://github.com/kartik/mediconnect",
    liveUrl: "https://mediconnect.vercel.app"
  },
  {
    id: "bookhub",
    name: "BookHub",
    theme: "Cosmic Library",
    category: "Publishing",
    description: "An immersive reading and publishing platform that transforms how users interact with literature, featuring AI companions and Text-to-Speech.",
    featured: true,
    complexityScore: 8,
    metrics: [
      { label: "Core Systems", value: "Reader & Writer" },
      { label: "Accessibility", value: "TTS Engine" },
      { label: "Engagement", value: "AI Companion" }
    ],
    techStack: ["React", "Express", "MongoDB", "Web Speech API", "TailwindCSS"],
    architecture: {
      frontend: ["React SPA", "Redux", "TailwindCSS"],
      backend: ["Express Server", "RESTful APIs", "Cloudinary"],
      database: ["MongoDB", "Book Metadata Schema"],
      aiLayer: ["Story Summarizer", "Character Chat"]
    },
    screenshots: [
      { image: "/placeholder-bookhub-1.webp", caption: "Immersive Reading Interface" },
      { image: "/placeholder-bookhub-2.webp", caption: "Author Publishing Studio" }
    ],
    githubUrl: "https://github.com/kartik/bookhub",
    liveUrl: "https://bookhub.vercel.app"
  },
  {
    id: "farmdirect",
    name: "FarmDirect",
    theme: "Agricultural Ecosystem",
    category: "Agriculture",
    description: "A decentralized marketplace empowering farmers to sell directly to consumers, bypassing middlemen with AI-driven pricing insights.",
    featured: false,
    complexityScore: 7,
    metrics: [
      { label: "Core Feature", value: "Direct Marketplace" },
      { label: "Accessibility", value: "Multilingual Support" },
      { label: "Optimization", value: "AI Pricing" }
    ],
    techStack: ["MERN Stack", "i18next", "TensorFlow.js"],
    architecture: {
      frontend: ["React", "i18n Translation", "PWA"],
      backend: ["Node.js", "Payment Gateway"],
      database: ["MongoDB", "Geospatial Queries"],
      aiLayer: ["Price Prediction Model"]
    },
    screenshots: [
      { image: "/placeholder-farmdirect-1.webp", caption: "Farmer Marketplace Dashboard" }
    ],
    githubUrl: "https://github.com/kartik/farmdirect"
  },
  {
    id: "flavorhaven",
    name: "Flavor Haven",
    theme: "Culinary World",
    category: "E-Commerce",
    description: "A modern food delivery and restaurant discovery platform with real-time order tracking.",
    featured: false,
    complexityScore: 6,
    metrics: [
      { label: "Tracking", value: "Real-time Orders" },
      { label: "Discovery", value: "Smart Recommendations" }
    ],
    techStack: ["MERN Stack", "Google Maps API"],
    architecture: {
      frontend: ["React", "Redux Toolkit"],
      backend: ["Express", "Socket.io Tracking"],
      database: ["MongoDB"],
      aiLayer: ["Recommendation Engine"]
    },
    screenshots: [
      { image: "/placeholder-flavorhaven-1.webp", caption: "Restaurant Discovery Feed" }
    ]
  },
  {
    id: "medicare",
    name: "Medicare",
    theme: "Origin Moon",
    category: "Mobile",
    description: "The project that started it all. A native Android healthcare application for booking appointments.",
    featured: false,
    complexityScore: 5,
    metrics: [
      { label: "Platform", value: "Native Android" },
      { label: "Impact", value: "First Production App" }
    ],
    techStack: ["Java", "Android Studio", "Firebase"],
    architecture: {
      frontend: ["XML Layouts", "Java Activities"],
      backend: ["Firebase Auth", "Firestore"],
      database: ["NoSQL Firebase"],
      aiLayer: []
    },
    screenshots: [
      { image: "/placeholder-medicare-1.webp", caption: "Appointment Booking Screen" }
    ]
  }
];

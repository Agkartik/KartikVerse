export interface ProjectMetric {
  label: string; // e.g., "Dashboards", "Security"
  value: string; // e.g., "3 Interactive", "Face Verification"
}

export interface ProjectArchitecture {
  frontend: string[];
  backend: string[];
  database: string[];
  aiLayer: string[];
}

export interface ProjectScreenshot {
  image: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  theme: string;           // e.g., "Healthcare Civilization"
  category: string;        // e.g., "Healthcare", "Publishing", "Agriculture"
  description: string;
  metrics: ProjectMetric[];
  techStack: string[];
  architecture: ProjectArchitecture;
  screenshots: ProjectScreenshot[];
  featured: boolean;
  complexityScore: number; // e.g., 1 to 10
  githubUrl?: string;
  liveUrl?: string;
}

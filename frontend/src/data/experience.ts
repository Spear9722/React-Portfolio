export interface ExperienceEntry {
  time: string;
  role: string;
  organization: string;
  bullets: string[];
  tags: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    time: "DEC 2024 — SEP 2025 · REMOTE",
    role: "Full Stack Engineer",
    organization:
      "The Burgundy Group, Inc. · Mesa, Arizona",

    bullets: [
      "Engineered and maintained two full-stack applications for a higher-education client, serving students, faculty, and staff.",
      "Built responsive React/TypeScript frontends and production REST APIs in Java (Spring Boot), FastAPI, and Flask.",
      "Managed AWS infrastructure (EC2, RDS) and Oracle SQL databases, with Docker-based CI/CD for every release.",
      "Kept the stack FERPA and HIPAA compliant while working inside a small, fast-moving agile team.",
    ],

    tags: [
      "React",
      "TypeScript",
      "Java · Spring Boot",
      "FastAPI",
      "AWS",
      "Docker",
      "Oracle SQL",
    ],
  },

  {
    time: "JUN 2022 — OCT 2024 · HYBRID",
    role: "Full Stack Developer",
    organization:
      "IBM · Monroe, Louisiana",

    bullets: [
      "Contributed across the full development lifecycle for 6–10 enterprise applications at once, spanning higher-education and telecom clients.",
      "Led a team that designed and deployed an AI-powered IT support chatbot on IBM Cloud using WatsonX and Watson Assistant.",
      "Modernized legacy systems and migrated workloads to cloud-native architectures on IBM Cloud and AWS.",
      "Integrated SSO, MFA, SAML, and Okta Identity Cloud for secure client-facing access.",
    ],

    tags: [
      "Python · Flask",
      "WatsonX",
      "Watson Assistant",
      "Docker Swarm",
      "IBM Cloud",
      "SSO · SAML · Okta",
    ],
  },

  {
    time: "MAY 2021 — MAY 2022 · ON-SITE",
    role: "Student Employee, IT Helpdesk",
    organization:
      "Texas Wesleyan University · Fort Worth, Texas",

    bullets: [
      "Resolved hardware, software, and network issues across Windows and Linux/Unix environments via ServiceNow.",
      "Handled account provisioning, password resets, and MFA setup under FERPA compliance.",
      "Built the troubleshooting foundation that carried into a full stack engineering career.",
    ],

    tags: [
      "ServiceNow",
      "Windows/Linux",
      "Access Provisioning",
    ],
  },
];
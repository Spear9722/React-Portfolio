export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "C#",
    ],
  },

  {
    label: "Frameworks",
    items: [
      "React",
      "Spring Boot",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],
  },

  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "IBM Cloud",
      "Docker",
      "CI/CD",
      "Microservices",
      "Git",
    ],
  },

  {
    label: "AI & ML",
    items: [
      "LLM Integration",
      "WatsonX",
      "Watson Assistant",
      "Reinforcement Learning",
      "Q-Learning",
    ],
  },

  {
    label: "Game Development",
    items: [
      "Unity",
      "Unreal Engine",
      "Computer Graphics",
      "OpenGL",
    ],
  },
];
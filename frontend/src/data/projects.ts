export interface Project {
  tag: string;
  title: string;
  description: string;
  tools: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    tag: "Reinforcement Learning",
    title: "Q-learning navigation agent",
    description:
      "An agent learns to reach a goal inside a simulated environment using Q-learning — no traditional pathfinding, just reward-driven trial and error. Built to deepen hands-on understanding of reinforcement learning rather than to ship a product.",
    tools: [
      "C#",
      "Unity",
      "Q-Learning",
    ],
    link: "https://github.com/yourusername/q-learning-agent",
  },
];
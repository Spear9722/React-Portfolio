export interface Project {
  tag: string;
  title: string;
  description: string;
  tools: string[];
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
  },

  {
    tag: "Engine Experiments",
    title: "Unity & Unreal side projects",
    description:
      "Ongoing personal projects across both engines, using C++ in Unreal and C# in Unity to prototype mechanics, tooling, and AI-driven behavior outside of a production pipeline.",
    tools: [
      "C++",
      "C#",
      "Unreal Engine",
      "Unity",
    ],
  },

  {
    tag: "Computer Graphics",
    title: "3D World",
    description:
      "A computer-graphics project exploring 3D rendering fundamentals — geometry, lighting, and scene composition built from first principles in C++.",
    tools: [
      "C++",
      "OpenGL",
      "Computer Graphics",
    ],
  },

  {
    tag: "Mobile",
    title: "AnimeDecider",
    description:
      "An Android app built in Android Studio to help users pick what to watch next — a smaller-scope project for practicing mobile development end to end.",
    tools: [
      "Android Studio",
      "Android Development",
    ],
  },
];
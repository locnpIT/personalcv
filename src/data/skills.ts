import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    categoryTag: "CORE SERVICES",
    description:
      "Architecting clean, maintainable Spring Boot services with strong typing, robust error handling, domain-driven structure, and comprehensive RESTful contracts.",
    skills: ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate", "Maven / Gradle", "Unit & Integration Testing"],
    icon: "Server",
  },
  {
    title: "Data & Performance",
    categoryTag: "STORAGE & CACHING",
    description:
      "Optimizing relational queries, analyzing execution plans, eliminating bottlenecks, and deploying Redis in-memory data structures for ultra-low latency reads and writes.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Query Optimization",
      "Indexing Strategies",
    ],
    icon: "Database",
  },
  {
    title: "Systems & Cloud",
    categoryTag: "INFRASTRUCTURE & RELIABILITY",
    description:
      "Containerizing services with Docker, managing multi-instance concurrency, deploying edge proxies, and building resilient distributed patterns for production stability.",
    skills: [
      "Docker",
      "AWS",
      "Cloudflare",
      "Concurrent Programming",
      "Distributed Systems",
      "CI/CD Pipelines",
    ],
    icon: "Cpu",
  },
];

export const mainTechnologies = [
  "Java",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Docker",
  "AWS",
  "Cloudflare",
];

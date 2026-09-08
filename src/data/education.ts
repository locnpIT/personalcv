import { EducationItem, PublicationItem } from "@/types";

export const educationData: EducationItem = {
  institution: "University of Education and Technology - The University of Da Nang",
  degree: "Bachelor of Science in Information Technology",
  period: "2022 – 2026",
  gpa: "3.66 / 4.0",
  location: "Da Nang, Vietnam",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Object-Oriented Programming (Java)",
    "Computer Networks",
    "Software Engineering",
    "Distributed Systems",
  ],
};

export const publicationData: PublicationItem = {
  title: "Design of Stroke Risk Warning System Based on Internet of Things (IoT) Technology and Machine Learning Model",
  conferenceOrJournal: "IEEE Xplore",
  year: "2025",
  authors: "Nguyen Phuoc Loc et al.",
  abstract:
    "Investigated the architecture and implementation of a real-time IoT healthcare telemetry pipeline. Designed low-latency data ingestion endpoints to process continuous physiological sensor streams, coupled with a machine learning classification model to detect early stroke risk indicators with high precision.",
  topics: ["IoT Data Ingestion", "Real-Time Telemetry", "Machine Learning", "System Reliability"],
  url: "https://ieeexplore.ieee.org/abstract/document/11142086",
};

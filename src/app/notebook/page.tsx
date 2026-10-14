import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { NotebookReader } from "./NotebookReader";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Sổ tay kỹ thuật",
  description: "Sổ tay Java, JVM, Spring Boot, Database, Redis và System Design.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const notebooks = [
  { file: "01-So-tay-JVM.html", title: "01 · JVM" },
  { file: "02-So-tay-Concurrency.html", title: "02 · Concurrency" },
  { file: "03-So-tay-Spring-Boot.html", title: "03 · Spring Boot" },
  { file: "04-So-tay-Database.html", title: "04 · Database" },
  { file: "05-So-tay-Redis.html", title: "05 · Redis" },
  { file: "06-So-tay-System-Design.html", title: "06 · System Design" },
  { file: "07-So-tay-Java-Core.html", title: "07 · Java Core" },
  {
    file: "08-Redis-Sorted-Set-Playground.html",
    title: "08 · Sân chơi Redis Sorted Set",
  },
];

export default async function NotebookPage() {
  // Embed the originals at build time: one route, no public document URLs.
  const documents = await Promise.all(
    notebooks.map(async ({ file, title }) => ({
      id: file,
      title,
      html: await readFile(path.join(process.cwd(), file), "utf8"),
    })),
  );

  return <NotebookReader documents={documents} />;
}

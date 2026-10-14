"use client";

import { useState } from "react";
import styles from "./notebook.module.css";

type NotebookDocument = {
  id: string;
  title: string;
  html: string;
};

export function NotebookReader({
  documents,
}: {
  documents: NotebookDocument[];
}) {
  const [selectedId, setSelectedId] = useState(documents[0].id);
  const selected = documents.find((document) => document.id === selectedId)!;

  return (
    <main id="main-content" lang="vi" className={styles.reader}>
      <header className={styles.toolbar}>
        <div className={styles.heading}>
          <h1>Sổ tay kỹ thuật</h1>
          <span>{documents.length} tài liệu</span>
        </div>
        <div className={styles.picker}>
          <label htmlFor="notebook-topic">Chủ đề</label>
          <select
            id="notebook-topic"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            {documents.map((document) => (
              <option key={document.id} value={document.id}>
                {document.title}
              </option>
            ))}
          </select>
        </div>
      </header>
      <iframe
        key={selected.id}
        title={selected.title}
        srcDoc={selected.html}
        className={styles.document}
        allow="clipboard-write"
      />
    </main>
  );
}

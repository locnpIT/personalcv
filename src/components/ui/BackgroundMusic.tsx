"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import styles from "./BackgroundMusic.module.css";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const autoStartRef = useRef(true);
  const [enabled, setEnabled] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    const stopListening = () => {
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
    };

    function startOnInteraction(event: MouseEvent | KeyboardEvent) {
      if (!event.isTrusted || !autoStartRef.current) return;
      // The music button handles its own click, including a request to pause.
      if (event.target instanceof Element && event.target.closest("[data-music-toggle]")) return;
      if (event instanceof KeyboardEvent && (event.key === "Tab" || event.key === "Escape")) return;
      void audio!.play().catch(() => {
        // Keep the button available when the browser still requires permission.
      });
    }

    const onPlaying = () => {
      autoStartRef.current = false;
    };

    audio.addEventListener("playing", onPlaying);
    document.addEventListener("click", startOnInteraction);
    document.addEventListener("keydown", startOnInteraction);
    // A rejected play promise is expected when audible autoplay is blocked.
    void audio.play().catch(() => {});

    return () => {
      stopListening();
      audio.removeEventListener("playing", onPlaying);
      audio.pause();
    };
  }, []);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    const nextEnabled = !enabled;
    setEnabled(nextEnabled);
    autoStartRef.current = nextEnabled;
    if (nextEnabled) {
      void audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }

  const label = unavailable ? "Music unavailable" : enabled ? "Turn music off" : "Turn music on";

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.webm"
        loop
        preload="auto"
        onError={() => {
          autoStartRef.current = false;
          setEnabled(false);
          setUnavailable(true);
        }}
      />
      <button
        type="button"
        data-music-toggle
        className={styles.toggle}
        aria-label={label}
        aria-pressed={enabled}
        title={label}
        disabled={unavailable}
        onClick={toggleMusic}
      >
        {enabled ? <Volume2 size={19} aria-hidden="true" /> : <VolumeX size={19} aria-hidden="true" />}
        <span>{unavailable ? "Music unavailable" : enabled ? "Music on" : "Music off"}</span>
      </button>
    </>
  );
}

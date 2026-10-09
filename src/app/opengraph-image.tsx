import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Nguyen Phuoc Loc - Backend Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4F8FD",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "8px solid #1D56C9",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontSize: 24,
              color: "#1D56C9",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            phuocloc.io.vn
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#3A4D68",
              fontFamily: "monospace",
              backgroundColor: "#E4EEFC",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "1px solid #C3D5EE",
            }}
          >
            JAVA · SPRING BOOT · REDIS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#0A1A33",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Nguyen Phuoc Loc
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#1D56C9",
              fontFamily: "monospace",
            }}
          >
            Backend Software Engineer
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#34465F",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            I build reliable backend systems with Java, Spring Boot, Redis, and SQL.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            borderTop: "1px solid #C3D5EE",
            paddingTop: 24,
          }}
        >
          {["Java", "Spring Boot", "MySQL", "Redis", "Distributed Systems", "Cloudflare"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 16,
                  color: "#22344F",
                  backgroundColor: "#E4EEFC",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  border: "1px solid #C3D5EE",
                  fontFamily: "monospace",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

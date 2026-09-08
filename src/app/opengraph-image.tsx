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
          backgroundColor: "#090d16",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "8px solid #10b981",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontSize: 24,
              color: "#10b981",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            phuocloc.io.vn
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#64748b",
              fontFamily: "monospace",
              backgroundColor: "#0f172a",
              padding: "6px 16px",
              borderRadius: "8px",
              border: "1px solid #1e293b",
            }}
          >
            SYS: NOMINAL // 2025
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#f8fafc",
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
              color: "#34d399",
              fontFamily: "monospace",
            }}
          >
            Backend Software Engineer
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
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
            borderTop: "1px solid #1e293b",
            paddingTop: 24,
          }}
        >
          {["Java", "Spring Boot", "MySQL", "Redis", "Distributed Systems", "Cloudflare"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 16,
                  color: "#cbd5e1",
                  backgroundColor: "#0f172a",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid #334155",
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

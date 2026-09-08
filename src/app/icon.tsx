import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#090d16",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#10b981",
          fontWeight: 800,
          fontFamily: "monospace",
          border: "2px solid #10b981",
          borderRadius: "6px",
        }}
      >
        PL
      </div>
    ),
    {
      ...size,
    }
  );
}

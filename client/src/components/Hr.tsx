import { PropsWithChildren } from "react";

export default function Hr({ children }: PropsWithChildren) {
  return (
    <div style={{ padding: "1rem 0", position: "relative" }}>
      <hr style={{ margin: 0 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "fit-content",
          height: "fit-content",
          backgroundColor: "var(--background)",
          padding: "0 1rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}

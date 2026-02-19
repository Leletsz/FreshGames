import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-xl mx-auto px-3">{children}</div>;
}

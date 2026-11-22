import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montassar Hannachi | Portfolio",
  description: "Cloud and DevOps engineer focused on Linux, OpenStack, Docker, Kubernetes, CI/CD and infrastructure automation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

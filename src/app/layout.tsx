import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/global.css";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";

export const metadata: Metadata = {
  title: "CodeLicius Blog",
  description: "Um blog Fantasia sobre programação e tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}

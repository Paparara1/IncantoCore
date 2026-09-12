import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "INCANTO — Deep-Tech Asset Portfolio, Licensing & Acquisition Platform",
  description:
    "INCANTO is a Deep-Tech Technology Platform and modular Technology Asset Portfolio connecting AI, Edge Intelligence, Neurotechnology, Robotics, IoT and Spatial Computing. Perception as the Source of Interaction.",
  keywords: [
    "INCANTO",
    "OJJJA",
    "Deep-Tech Technology Assets",
    "AI Technology Licensing",
    "AI Technology Acquisition",
    "Edge AI",
    "Neurotechnology",
    "Robotics AI",
    "Spatial Computing",
    "Assistive AI"
  ],
  authors: [{ name: "OJJJA.XYZ / INCANTO Team" }],
  openGraph: {
    title: "INCANTO — Deep-Tech Technology Portfolio & Asset Deal Platform",
    description: "AI Technologies Built to Connect Intelligence with the Physical World.",
    url: "https://ojjja.xyz",
    siteName: "INCANTO Deep-Tech Platform",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "INCANTO — Deep-Tech Asset Portfolio & Licensing Hub",
    description: "Explore, license, partner with or acquire emerging technology assets across AI, Edge Intelligence, Neurotechnology, Robotics, IoT and Spatial Computing."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased bg-tech-grid selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

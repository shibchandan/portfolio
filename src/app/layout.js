import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shib Chandan Mistry | Systems & Full Stack Engineer",
  description: "Developer Portfolio of Shib Chandan Mistry, 3rd Year B.Tech Computer Science student specializing in Systems Programming (C++), Network Security, AI Infrastructure, and High-Performance Web Architectures.",
  keywords: ["Shib Chandan Mistry", "Software Engineer", "Systems Engineer", "Full Stack Developer", "C++ Developer", "MNNIT Allahabad", "Computer Science Portfolio"],
  openGraph: {
    title: "Shib Chandan Mistry | Systems & Full Stack Engineer",
    description: "Recruiter-focused engineering showcase featuring real-world packet interceptors, vector databases, and mesh gateways.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="bg-dark-bg text-text-light font-sans min-h-full flex flex-col selection:bg-neon-blue selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

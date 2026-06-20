import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shib Chandan Mistry | Full Stack Software Developer",
  description: "Developer Portfolio of Shib Chandan Mistry, 3rd Year B.Tech Computer Science student specializing in Full Stack Development, Scalable Web Architectures, and High-Performance Systems.",
  keywords: ["Shib Chandan Mistry", "Software Engineer", "Full Stack Developer", "Web Developer", "React Developer", "MNNIT Allahabad", "Computer Science Portfolio"],
  openGraph: {
    title: "Shib Chandan Mistry | Full Stack Software Developer",
    description: "Recruiter-focused engineering showcase featuring real-world packet interceptors, vector databases, and mesh gateways.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-text-light font-sans min-h-full flex flex-col selection:bg-neon-blue selection:text-white antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

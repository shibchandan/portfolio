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
      <body className="bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-text-light font-sans min-h-full flex flex-col selection:bg-neon-blue selection:text-white antialiased transition-colors duration-300 relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Premium Background Orbs for Glassmorphism (Vibrant) */}
          <div className="fixed inset-0 z-[-1] pointer-events-none dark:hidden overflow-hidden bg-sky-50">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/50 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[60%] rounded-full bg-lime-300/40 blur-[140px]" />
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-300/40 blur-[130px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/30 blur-[100px]" />
          </div>

          <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/15 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-neon-purple/15 blur-[120px]" />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

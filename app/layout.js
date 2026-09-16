import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Azmat Ullah Khan | Senior Frontend Developer & UI/UX Designer",
  description:
    "Portfolio of Azmat Ullah Khan, a Frontend Developer and UI/UX Designer crafting high-performance, visually stunning web applications with React, Next.js, and modern design systems.",
  keywords: [
    "Azmat Ullah Khan",
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Pakistan",
    "Fullstack Freelancer",
    "Tailwind CSS",
  ],
  authors: [{ name: "Azmat Ullah Khan" }],
  creator: "Azmat Ullah Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azmat.dev",
    title: "Azmat Ullah Khan | Frontend Developer & UI/UX Designer",
    description:
      "Crafting high-performance web applications and visually compelling digital experiences.",
    siteName: "Azmat Ullah Khan Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="font-sans antialiased min-h-screen selection:bg-primary/20 selection:text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

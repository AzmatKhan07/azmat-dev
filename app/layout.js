import "./globals.css";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-raw",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body-raw",
  display: "swap",
});

const description =
  "Azmat Ullah Khan is a frontend developer and interface designer in Swat, Pakistan, building production React and Next.js applications and the design systems behind them.";

export const metadata = {
  metadataBase: new URL("https://azmat.dev"),
  title: {
    default: `${profile.name} — Frontend developer and interface designer`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Azmat Ullah Khan",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "interface designer",
    "design systems",
    "Pakistan",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} — Frontend developer and interface designer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Frontend developer and interface designer`,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import { site } from "../content/site.config";
import SkipLink from "./components/SkipLink";
import Shell from "./components/Shell";
import Services from "./components/slides/Services";
import Work from "./components/slides/Work";
import About from "./components/slides/About";
import Awards from "./components/slides/Awards";
import Contact from "./components/slides/Contact";
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
  title: site.seo.title,
  description: site.seo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} root-layout`}>
        <SkipLink />
        <Shell
          services={<Services />}
          work={<Work />}
          about={<About />}
          awards={<Awards />}
          contact={<Contact />}
        >
          <div className="root-main">{children}</div>
        </Shell>
      </body>
    </html>
  );
}

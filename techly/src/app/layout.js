import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Techly – Web App Development Company in Bhavnagar",
  description: "Techly is a Bhavnagar based web app development company helping businesses go online with modern technology.",
  keywords: "IT solutions, web development, cloud services, cybersecurity, digital transformation, software development",
  authors: [{ name: "Techly Team" }],
  openGraph: {
    title: "Techly – Web App Development Company in Bhavnagar",
    description: "Techly is a Bhavnagar based web app development company helping businesses go online with modern technology.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

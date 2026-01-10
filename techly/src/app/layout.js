import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Techly - Innovative IT Solutions & Services",
  description: "Transform your business with Techly's cutting-edge IT solutions. We provide web development, cloud services, cybersecurity, and digital transformation services.",
  keywords: "IT solutions, web development, cloud services, cybersecurity, digital transformation, software development",
  authors: [{ name: "Techly Team" }],
  openGraph: {
    title: "Techly - Innovative IT Solutions & Services",
    description: "Transform your business with cutting-edge IT solutions",
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

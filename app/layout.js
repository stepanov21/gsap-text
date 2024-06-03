import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

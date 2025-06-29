import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600" , "700"],
  variable: "--font-outfit", // Опционально: для использования CSS-переменной
});

export const metadata = {
  title: "Ne habar ?",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        {/* или используйте вариант с CSS-переменной: */}
        {/* <body className={`${outfit.variable} antialiased`}> */}
        {children}
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InstaLog",
  description:
    "An activity log tab so that IT admins can check their team’s activity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center px-16 py-20 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}

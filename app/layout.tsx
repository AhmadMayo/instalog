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
    <html lang="en" className="h-full w-full">
      <body
        className={`flex min-h-full min-w-full flex-col items-center justify-center ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}

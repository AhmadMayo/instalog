import "./globals.css";

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
    <html lang="en" className="w-full h-full">
      <body className="min-w-full min-h-full flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}

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
    <html lang="en" className="h-full w-full">
      <body className="flex min-h-full min-w-full flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}

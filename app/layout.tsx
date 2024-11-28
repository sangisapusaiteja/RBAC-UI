
import HeaderAuth from "@/components/header-auth";

import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "RBAC-UI",
  description: "Sample project for RBAC-UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full h-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center h-16">
                <div className="w-full max-w-5xl flex justify-center items-center p-3 px-5 text-sm">
                <HeaderAuth />
                </div>
              </nav>
              <div className="flex flex-col items-center gap-20 py-5 mt-20 w-full">
                {children}
              </div>
            </div>
          </main>
      </body>
    </html>
  );
}

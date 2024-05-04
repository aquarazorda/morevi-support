import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Support Georgia's Civil Society",
  description: `We stand against the "foreign agent bill" threatening Georgian civil society. We'll fund creative, non-violent protests in Tbilisi.`,
  openGraph: {
    images: ["https://morevi-support.vercel.app/footer.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "w-screen flex items-center justify-center py-4 lg:py-0 lg:h-screen",
        )}
      >
        {children}
      </body>
    </html>
  );
}

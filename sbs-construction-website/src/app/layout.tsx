import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { LocaleScript } from "@/components/layout/LocaleScript";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { LocaleProvider } from "@/lib/locale-context";
import { defaultMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <LocaleScript />
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-sbs-gray-900 text-white`}>
        <LocaleProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}

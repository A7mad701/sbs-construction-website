import { Inter, Cairo } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { DirWrapper } from "@/components/layout/DirWrapper";
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

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${cairo.variable}`}>
      <head>
        <LocaleScript />
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased bg-sbs-gray-900 text-white transition-[font-family] duration-300">
        <LocaleProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" role="main">
              <DirWrapper>{children}</DirWrapper>
            </main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}

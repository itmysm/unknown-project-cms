import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header/header";
import { Footer } from "./_components/footer/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazir-Thin-WOL.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Light-WOL.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-WOL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Medium-WOL.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Bold-WOL.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${vazir.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] font-bold uppercase dark:bg-base-300 dark:text-base-content">
        <Header />
        <div className="flex-1 flex  justify-center items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

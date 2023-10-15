import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col h-screen font-bold">
        <header className="bg-gray-200 flex items-center justify-center h-20">Header</header>
        <div className="h-full">{children}</div>
        <footer className="bg-gray-200 flex items-center justify-center h-20">footer</footer>
      </body>
    </html>
  );
}

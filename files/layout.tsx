import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "منصتك الذكية",
  description: "منصة SaaS للملفات والمشاريع"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
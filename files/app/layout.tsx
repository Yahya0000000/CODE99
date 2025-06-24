import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastProvider from "./components/Toast";
import "../utils/sentry";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans bg-gray-50">
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
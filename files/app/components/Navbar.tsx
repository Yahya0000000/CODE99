import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Logo />
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">الرئيسية</Link>
        <Link href="/files/upload" className="text-gray-700 hover:text-blue-600">رفع الملفات</Link>
        <Link href="/projects/generator" className="text-gray-700 hover:text-blue-600">توليد مشروع</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">لوحة التحكم</Link>
        <Link href="/payment" className="text-gray-700 hover:text-yellow-600">الدفع</Link>
        <Link href="/pricing" className="text-gray-700 hover:text-purple-600">الأسعار</Link>
        <Link href="/support" className="text-gray-700 hover:text-indigo-600">الدعم</Link>
        <Link href="/login" className="text-gray-700 hover:text-green-600">دخول</Link>
        <Link href="/signup" className="text-gray-700 hover:text-green-600">تسجيل</Link>
      </div>
    </nav>
  );
}
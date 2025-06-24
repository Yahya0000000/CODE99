import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404</h2>
      <p className="mb-4 text-gray-700">عذراً، الصفحة غير موجودة.</p>
      <Link href="/" className="btn-primary">العودة للرئيسية</Link>
    </div>
  );
}
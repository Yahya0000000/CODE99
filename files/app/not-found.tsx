export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-red-700 mb-4">404</h1>
      <p className="text-lg mb-6">الصفحة غير موجودة</p>
      <a href="/" className="text-blue-600 underline">العودة للرئيسية</a>
    </div>
  );
}
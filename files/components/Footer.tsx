export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center mt-12">
      <div className="text-gray-500 text-xs">
        © {new Date().getFullYear()} منصتك الذكية. جميع الحقوق محفوظة.
      </div>
      <div className="mt-2 flex justify-center gap-4">
        <a href="/privacy" className="text-blue-500 underline">سياسة الخصوصية</a>
        <a href="/terms" className="text-blue-500 underline">الشروط</a>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-8 text-center">
      <span className="text-gray-500 text-sm">© {new Date().getFullYear()} منصتك الذكية. جميع الحقوق محفوظة.</span>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="text-blue-500 underline">سياسة الخصوصية</a>
        <a href="/terms" className="text-blue-500 underline">الشروط</a>
      </div>
    </footer>
  );
}
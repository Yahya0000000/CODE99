export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Logo" className="h-8" />
      <span className="font-bold text-blue-700 text-lg">منصتك الذكية</span>
    </div>
  );
}
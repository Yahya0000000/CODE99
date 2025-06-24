export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">منصتك الذكية للملفات والمشاريع</h1>
      <p className="text-lg mb-6 text-gray-600 max-w-xl text-center">
        ارفع ملفاتك، جرب الذكاء الاصطناعي، وادفع بسهولة عبر Stripe. كل شيء في مكان واحد!
      </p>
      <div className="flex gap-4">
        <a href="/files/upload" className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">رفع ملف</a>
        <a href="/projects/generator" className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">توليد مشروع</a>
        <a href="/payment" className="px-6 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition">الدفع/الاشتراك</a>
        <a href="/pricing" className="px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">الأسعار</a>
      </div>
    </main>
  );
}
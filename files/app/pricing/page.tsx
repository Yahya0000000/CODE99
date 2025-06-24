export default function Pricing() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">خطط الأسعار</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">مجانية</h3>
          <div className="text-2xl mb-4">0 ريال</div>
          <ul className="mb-4 text-gray-700">
            <li>رفع ملفات محدود</li>
            <li>تجربة الذكاء الاصطناعي</li>
            <li>دعم فني عبر البريد</li>
          </ul>
          <button className="bg-gray-400 text-white px-4 py-2 rounded" disabled>الخطة الحالية</button>
        </div>
        <div className="bg-white p-6 rounded shadow flex flex-col items-center border-2 border-blue-500">
          <h3 className="font-bold text-lg mb-2">احترافية</h3>
          <div className="text-2xl mb-4">49 ريال/شهر</div>
          <ul className="mb-4 text-gray-700">
            <li>رفع ملفات غير محدود</li>
            <li>ذكاء اصطناعي متقدم</li>
            <li>أولوية في الدعم الفني</li>
          </ul>
          <a href="/payment" className="bg-blue-600 text-white px-4 py-2 rounded">اشترك الآن</a>
        </div>
        <div className="bg-white p-6 rounded shadow flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">شركات</h3>
          <div className="text-2xl mb-4">تواصل معنا</div>
          <ul className="mb-4 text-gray-700">
            <li>خصائص مخصصة</li>
            <li>دعم فني مباشر</li>
            <li>لوحة تحكم متقدمة</li>
          </ul>
          <a href="/support" className="bg-indigo-600 text-white px-4 py-2 rounded">تواصل معنا</a>
        </div>
      </div>
    </div>
  );
}
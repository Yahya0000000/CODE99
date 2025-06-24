export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">خطط الأسعار</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">المجانية</h3>
          <p className="mb-4 text-gray-600">0 ريال / شهر</p>
          <ul className="mb-4 space-y-2 text-gray-500 text-sm">
            <li>مشروع واحد</li>
            <li>تخزين محدود</li>
            <li>دعم عن طريق البريد</li>
          </ul>
          <button className="btn-outline w-full">ابدأ الآن</button>
        </div>
        <div className="border-2 border-blue-700 rounded-lg p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-blue-700">الاحترافي</h3>
          <p className="mb-4 text-blue-700 font-extrabold">49 ريال / شهر</p>
          <ul className="mb-4 space-y-2 text-gray-700 text-sm">
            <li>عدد مشاريع غير محدود</li>
            <li>تخزين حتى 100GB</li>
            <li>دعم فني مباشر</li>
            <li>مزايا الذكاء الاصطناعي</li>
          </ul>
          <button className="btn-primary w-full">اشترك الآن</button>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">الشركات</h3>
          <p className="mb-4 text-gray-600">اتصل بنا</p>
          <ul className="mb-4 space-y-2 text-gray-500 text-sm">
            <li>خصائص مخصصة</li>
            <li>دعم على مدار الساعة</li>
            <li>خطة دفع مرنة</li>
          </ul>
          <button className="btn-outline w-full">تواصل معنا</button>
        </div>
      </div>
    </div>
  );
}
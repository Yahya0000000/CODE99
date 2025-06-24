export default function Support() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">الدعم الفني</h2>
      <p className="mb-4">لأي استفسار أو مشكلة، راسلنا على: <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a></p>
      <form className="bg-white p-6 rounded shadow max-w-md">
        <input type="text" className="w-full mb-3 p-2 border rounded" placeholder="اسمك" />
        <input type="email" className="w-full mb-3 p-2 border rounded" placeholder="بريدك الإلكتروني" />
        <textarea className="w-full mb-3 p-2 border rounded" rows={4} placeholder="رسالتك/مشكلتك"></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">إرسال</button>
      </form>
    </div>
  );
}
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-6">مشاريعي</h2>
      <div className="mb-4">
        <Link href="#" className="btn-primary">+ مشروع جديد</Link>
      </div>
      <p className="text-gray-700 mb-4">
        هنا قائمة مشاريعك. (تفعيل الربط مع API لاحقاً)
      </p>
    </div>
  );
}
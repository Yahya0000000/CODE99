import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <span className="font-extrabold text-blue-700 text-xl">منصتك الذكية</span>
    </div>
  );
}
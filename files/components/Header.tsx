"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/pricing", label: "التسعير" },
  { href: "/projects", label: "المشاريع" },
  { href: "/files", label: "ملفاتي" },
  { href: "/support", label: "الدعم" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <nav className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-700 transition-colors ${pathname === link.href ? "text-blue-700 font-bold" : "text-gray-600"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="btn-outline">دخول</Link>
          <Link href="/signup" className="btn-primary">جرب مجاناً</Link>
        </div>
      </div>
    </header>
  );
}
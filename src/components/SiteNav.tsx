"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="site">
      <ul className="ap-nav">
        {items.map((item) =>
          item.href.startsWith("/") ? (
            <li key={item.href}>
              <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            </li>
          ) : (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

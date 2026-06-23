'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import styles from './Navbar.module.css';

type NavItem = {
  label: string;
  href: string;
};

function isSelectedPath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavbarLinks({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const isSelected = isSelectedPath(pathname, item.href);

        return (
          <Link
            aria-current={isSelected ? 'page' : undefined}
            className={cn(
              styles.link,
              isSelected && styles.selectedLink,
              'relative rounded-full px-3.5 py-2 text-sm font-medium transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]',
            )}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/nav';
import { cn } from '@/components/ui';

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5 p-3">
      <div className="mb-5 px-2">
        <p className="font-display text-lg font-semibold tracking-tight text-brand">
          Appetitebind
        </p>
        <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-steel">
          Binding desk
        </p>
      </div>
      {NAV_ITEMS.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'rounded-sm px-2.5 py-2 text-sm transition-colors duration-[180ms]',
              active
                ? 'bg-bind/15 font-semibold text-bind'
                : 'text-ink/80 hover:bg-panel',
            )}
          >
            <span className="block">{item.label}</span>
            <span className="block text-[11px] font-normal text-steel">{item.hint}</span>
          </Link>
        );
      })}
    </nav>
  );
}

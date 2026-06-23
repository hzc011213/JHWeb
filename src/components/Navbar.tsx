import GlassSurface from '@/components/react-bits/GlassSurface';
import { cn } from '@/lib/utils';

import styles from './Navbar.module.css';
import NavbarLinks from './NavbarLinks';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Design', href: '/design' },
  { label: 'Experience', href: '/experience' },
];

export default function Navbar() {
  return (
    <nav
      className={cn(
        styles.root,
        'fixed top-4 right-0 left-0 z-50 flex items-center justify-between px-8 lg:px-16',
      )}
    >
      <div aria-hidden="true" className="h-12 w-12" />

      <GlassSurface
        height={52}
        width={400}
        borderRadius={9999}
        borderWidth={0.07}
        brightness={50}
        displace={0.5}
        distortionScale={-180}
        opacity={0.93}
        saturation={1}
        className={cn(
          styles.glass,
          'hidden items-center px-1.5 py-1.5 md:flex',
        )}
      >
        <NavbarLinks items={navItems} />
      </GlassSurface>

      <div aria-hidden="true" className="h-12 w-12" />
    </nav>
  );
}

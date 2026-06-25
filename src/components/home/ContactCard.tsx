'use client';

import Image from 'next/image';

import BorderGlow from '@/components/react-bits/BorderGlow';
import { contacts } from '@/data/contact';

export default function ContactCard() {
  return (
    <section className="mx-auto flex w-full max-w-7xl justify-center px-0 pt-20 pb-8 sm:pt-24 md:pt-28">
      <BorderGlow
        glowRadius={60}
        animated={true}
        backgroundColor="var(--background)"
        className="w-full max-w-90 sm:max-w-96"
      >
        <div className="bg-background text-foreground rounded-[28px] px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center justify-center gap-8 sm:gap-10">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                aria-label={`Open ${contact.name}`}
                className="group border-foreground/10 focus-visible:ring-foreground focus-visible:ring-offset-background dark:bg-foreground/[0.035] dark:hover:bg-foreground/[0.065] flex size-11 items-center justify-center rounded-[15px] border bg-white/72 transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-offset-4 active:translate-y-0"
                href={contact.link}
                rel="noreferrer"
                target={
                  contact.link.startsWith('mailto:') ? undefined : '_blank'
                }
              >
                <Image
                  alt=""
                  className="size-6 object-contain opacity-82 transition-[opacity,transform] duration-300 group-hover:scale-105 group-hover:opacity-100 dark:invert"
                  height={24}
                  src={contact.logo}
                  width={24}
                />
              </a>
            ))}
          </div>
        </div>
      </BorderGlow>
    </section>
  );
}

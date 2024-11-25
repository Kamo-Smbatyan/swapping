"use client";

import Link from "next/link";

import Image from "next/image";
import { type ReactNode } from "react";
import { siteConfig } from "../../config/site";
import { type MainNavItem } from "../../types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: ReactNode;
}

export function Navbar({ items, children }: MainNavProps) {
  return (
    <div className=" flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/favicon.ico"
          width={40}
          height={40}
          alt="tokenIcon"
          className="object-contain"
        />
        <span className="font-bold text-3xl">{siteConfig.name}</span>
      </Link>
    </div>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-2 items-center shadow bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm px-4 py-3 rounded-xl sticky top-5 z-50"
    >
      <div className="col-span-1 md:col-span-2 lg:col-span-1 text-xl flex flex-row items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex flex-row gap-1 text-xl">
            ✲
          </Link>
        </Button>
        <Button className="px-0 md:px-2" variant="ghost" asChild>
          <Link href="/#featured">
            <span className="md:hidden">Home</span>
            <span className="hidden md:block">Browse</span>
          </Link>
        </Button>
        <Button className="px-0 md:px-2" variant="ghost" asChild>
          <Link href="/tools">Best Tools</Link>
        </Button>
      </div>
      <div className="col-span-3 md:col-span-2 lg:col-span-2 flex-row justify-center hidden md:flex">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-row gap-1 justify-end">
        <Button variant="ghost" asChild>
          <Link
            href="https://github.com/mohitrajcoderf/developer-docs-gallery/"
            target="_blank"
            rel="noopener"
            className="flex flex-row gap-1"
          >
            <svg viewBox="0 0 496 512" className="w-4 h-4 fill-current">
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
            <span className="hidden md:block">GitHub</span>
          </Link>
        </Button>
        <Button variant="default" asChild>
          <Link href="/contribute">Submit</Link>
        </Button>
      </div>
      <div className="col-span-2 flex flex-row justify-center md:hidden">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </motion.header>
  );
};

export default Header;

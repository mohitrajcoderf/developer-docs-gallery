"use client";

import React from 'react';
import { Input } from "@/components/ui/input";


interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  
  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="relative flex-1">
      <Input
        type="text"
        placeholder="Search…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full dark:bg-neutral-900 bg-white"
      />
      {searchTerm && (
        <button className="absolute top-2 right-2" onClick={handleClear}>
          <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current">
            <path
              fill="currentColor"
              d="M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256l132.5-132.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.6 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6l132.5 132.5z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
"use client";

import React, { useState } from "react";

import {
  BookOpen,
  BriefcaseBusiness,
  FolderKanban,
  LayoutDashboard,
  Mail,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";

import Sidebar from "./Sidebar";
import Searchpage from "./Searchpage";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ dark, setDark }) => {
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(true);

  const navLinks = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={17} />,
      href: "/",
    },
    {
      name: "Experience",
      icon: <BriefcaseBusiness size={17} />,
      href: "/experience",
    },
    {
      name: "Projects",
      icon: <FolderKanban size={17} />,
      href: "/projects",
    },
    {
      name: "Blogs",
      icon: <BookOpen size={17} />,
      href: "/blogs",
    },
    {
      name: "Contact",
      icon: <Mail size={17} />,
      href: "/contact",
    },
    {
      name: "Resume",
      icon: <Mail size={17} />,
      href: "/resume",
    },
  ];

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <header className="sticky top-0 z-50 w-full bg-slate-100 dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">

        <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 py-2.5">

          {/* Logo & Name */}
          <div className="flex items-center gap-2.5 min-w-0">

            {/* Logo */}
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md">
              MS
            </div>

            {/* Name */}
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white truncate">
                Manish Suriyal
              </h1>

              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                Full Stack Developer
              </p>
            </div>

          </div>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            {/* Desktop Search */}
            {search ? (
              <button
                onClick={() => setSearch(false)}
                aria-label="Open search"
                className="hidden md:flex group items-center gap-2 px-3 lg:px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Search
                  size={17}
                  className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform"
                />

                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Search
                </span>

                <kbd className="hidden lg:flex items-center px-2 py-1 text-xs font-mono rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  Shift + /
                </kbd>
              </button>
            ) : (
              <div className="hidden md:block">
                <Searchpage
                  search={search}
                  setSearch={setSearch}
                />
              </div>
            )}

            {/* Mobile Search */}
            <button
              onClick={() => setSearch(!search)}
              aria-label="Search"
              className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <Search size={17} />
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700" />

            {/* Theme Toggle */}
            <button
              aria-label={
                dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {dark ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700" />

            {/* Menu */}
            <button
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu(!menu)}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {menu ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE SEARCH ================= */}
        {!search && (
          <div className="md:hidden px-3 pb-3">
            <Searchpage
              search={search}
              setSearch={setSearch}
            />
          </div>
        )}

      </header>

      {/* ================= NAVIGATION ================= */}
      <header className="sticky top-[61px] sm:top-[65px] z-40 w-full bg-slate-100 dark:bg-black border-b border-gray-300 dark:border-gray-700 shadow-sm">

        <nav className="flex w-full overflow-x-auto scrollbar-hide px-1 sm:px-2 md:px-8">

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center justify-center gap-1.5
                px-3 sm:px-4
                py-2.5 sm:py-3
                text-xs sm:text-sm
                whitespace-nowrap
                shrink-0
                transition-colors
                hover:bg-gray-200
                dark:hover:bg-gray-800
                ${
                  pathname === item.href
                    ? "border-b-2 border-orange-500 font-medium text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400"
                }
              `}
            >

              {/* Icon */}
              <span className="hidden sm:block">
                {item.icon}
              </span>

              {/* Name */}
              <span>
                {item.name}
              </span>

            </Link>
          ))}

        </nav>

      </header>

      {/* ================= SIDEBAR ================= */}
      {menu && (
        <Sidebar
          menu={menu}
          setMenu={setMenu}
        />
      )}

    </>
  );
};

export default Navbar;


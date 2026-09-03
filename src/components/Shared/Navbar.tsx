"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch, FiHeart, FiPhone, FiX } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

const NAV_LINKS = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Why Choose Cosa", href: "/#why-choose-cosa" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Contact", href: "/contact" },
  { label: "Travel Designers", href: "/travel-designers" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Event Creators", href: "/event-creators" },
  { label: "Booking Specialists", href: "/booking-specialists" },
  { label: "Switzerland Experts", href: "/switzerland-experts" },
  { label: "Our Team", href: "/our-team" },
  { label: "Sign Up", href: "#signup" },
];

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
];

const CURRENCIES = [
  { code: "CHF", label: "Swiss Franc" },
  { code: "EUR", label: "Euro" },
  { code: "USD", label: "US Dollar" },
  { code: "GBP", label: "British Pound" },
];

const SEARCH_SUGGESTIONS = [
  { label: "Travel Designers", href: "/travel-designers" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Event Creators", href: "/event-creators" },
  { label: "Booking Specialists", href: "/booking-specialists" },
  { label: "Switzerland Experts", href: "/switzerland-experts" },
  { label: "Why Choose Cosa", href: "/#why-choose-cosa" },
  { label: "Inspiring Destinations", href: "/#destinations" },
  { label: "Meet the Cosa Family", href: "/our-team" },
  { label: "Contact & Departments", href: "/contact" },
  { label: "Newsletter Sign Up", href: "#signup" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [saved, setSaved] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (
        currencyRef.current &&
        !currencyRef.current.contains(e.target as Node)
      ) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Escape closes everything
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setLangOpen(false);
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when a full-screen overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  function go(href: string) {
    setMenuOpen(false);
    setSearchOpen(false);

    // "/#section" style links: hash lives on the homepage.
    if (href.startsWith("/#")) {
      const hash = href.slice(1); // "#section"
      if (pathname === "/") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
      return;
    }

    // "#section" style links: scroll within the current page (works on
    // both Home and Travel Designers, since both render #signup).
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback: section doesn't exist here, so go find it on the homepage.
        router.push(`/${href}`);
      }
      return;
    }

    // Plain route, e.g. "/travel-designers"
    router.push(href);
  }

  const filteredSuggestions = SEARCH_SUGGESTIONS.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <nav id="top" className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[1180px] mx-auto px-8 py-8 flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="space-y-2 cursor-pointer group"
            >
              <div className="w-14 h-[1px] bg-white group-hover:opacity-70 transition-opacity"></div>
              <div className="w-14 h-[1px] bg-white group-hover:opacity-70 transition-opacity"></div>
            </button>

            <a
              href="tel:+41442694040"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <FiPhone className="text-[15px]" />
              <span className="text-sm tracking-wide">Call Us</span>
            </a>
          </div>

          {/* Logo */}
          <Link href="/" aria-label="Cosa home">
  <h1
    className="
      font-heading
      text-[52px]
      tracking-[0.15em]
      font-light
      text-white
    "
  >
    COSA
  </h1>
</Link>

          {/* Icons */}
          <div className="flex items-center gap-5 text-white text-[18px]">
            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => {
                  setLangOpen((v) => !v);
                  setCurrencyOpen(false);
                }}
                aria-label="Change language"
                className="hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
              >
                <TbWorld />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-[#f8f7f4] text-neutral-800 shadow-lg py-2 text-[13px]">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-neutral-200/60 transition-colors flex justify-between ${
                        language.code === l.code ? "font-medium" : ""
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="text-neutral-400">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => {
                  setCurrencyOpen((v) => !v);
                  setLangOpen(false);
                }}
                aria-label="Change currency"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <TbWorld />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-[#f8f7f4] text-neutral-800 shadow-lg py-2 text-[13px]">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-neutral-200/60 transition-colors flex justify-between ${
                        currency.code === c.code ? "font-medium" : ""
                      }`}
                    >
                      <span>{c.label}</span>
                      <span className="text-neutral-400">{c.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <FiSearch />
            </button>

            <button
              onClick={() => setSaved((v) => !v)}
              aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
              className="relative hover:opacity-80 transition-opacity cursor-pointer"
            >
              <FiHeart className={saved ? "fill-white" : ""} />
              {saved && (
                <span className="absolute -top-2 -right-2 bg-[#c96442] text-white text-[9px] leading-none rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  1
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / full nav drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[110] bg-[#161512]/97 text-white flex flex-col">
          <div className="max-w-[1180px] w-full mx-auto px-8 py-8 flex justify-between items-center">
            <span className="font-heading text-[28px] tracking-[0.15em]">
              COSA
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-[22px] hover:opacity-70 transition-opacity"
            >
              <FiX />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="font-heading italic font-light text-[32px] hover:opacity-70 transition-opacity"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+41442694040"
              className="mt-4 text-sm tracking-wide text-neutral-300 hover:text-white transition-colors"
            >
              +41 44 269 40 40
            </a>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[110] bg-[#f8f7f4] flex flex-col">
          <div className="max-w-[900px] w-full mx-auto px-8 pt-16 pb-8 flex-1">
            <div className="flex justify-between items-center mb-10">
              <span className="font-heading italic font-light text-[28px] text-neutral-900">
                Search Cosa
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="text-[20px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <FiX />
              </button>
            </div>

            <div className="relative border-b border-neutral-400 pb-3">
              <FiSearch className="absolute left-0 top-1 text-neutral-500" />
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredSuggestions[0]) {
                    go(filteredSuggestions[0].href);
                  }
                }}
                placeholder="Try “Switzerland”, “Events”, “Destinations”…"
                className="w-full pl-7 bg-transparent text-[18px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
              />
            </div>

            <div className="mt-8">
              <p className="text-[12px] uppercase tracking-wide text-neutral-400 mb-4">
                {query ? "Results" : "Popular"}
              </p>
              <ul className="space-y-3">
                {(query ? filteredSuggestions : SEARCH_SUGGESTIONS).map(
                  (s) => (
                    <li key={s.label}>
                      <button
                        onClick={() => go(s.href)}
                        className="text-[16px] text-neutral-700 hover:text-neutral-900 transition-colors"
                      >
                        {s.label}
                      </button>
                    </li>
                  )
                )}
                {query && filteredSuggestions.length === 0 && (
                  <li className="text-[14px] text-neutral-500">
                    No results — try the general contact form instead.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

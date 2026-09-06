"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiSearch, FiHeart, FiPhone, FiX } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

type MenuLink = {
  label: string;
  href: string;
};

type MenuSection = {
  key: string;
  label: string;
  links: MenuLink[];
  image: {
    src: string;
    alt: string;
  };
};

const MENU_SECTIONS: MenuSection[] = [
  {
    key: "explore",
    label: "Explore",
    links: [
      { label: "The World", href: "/explore-the-world" },
      { label: "Switzerland", href: "/switzerland" },
      { label: "Cosa inspirations", href: "/cosa-inspirations" },
    ],
    image: {
      src: "/images/mega-menu/explore-baobabs.jpg",
      alt: "Avenue of the Baobabs at sunset, Madagascar",
    },
  },
  {
    key: "services",
    label: "Services",
    links: [
      { label: "Travel Designer", href: "/travel-designers" },
      { label: "Event Creators", href: "/event-creators" },
      { label: "Booking Specialist", href: "/booking-specialists" },
      { label: "Switzerland Experts", href: "/switzerland-experts" },
    ],
    image: {
      src: "/images/mega-menu/services.jpg",
      alt: "Cosa travel designer planning a bespoke itinerary",
    },
  },
  {
    key: "why-cosa",
    label: "Why Cosa",
    links: [
      { label: "Our Approach", href: "/#why-choose-cosa" },
      { label: "Conscious Travel", href: "/about-us#conscious-travel" },
      { label: "Corporate Events", href: "/corporate-events" },
    ],
    image: {
      src: "/images/mega-menu/why-cosa.jpg",
      alt: "A tailor-made Cosa journey in progress",
    },
  },
  {
    key: "about-us",
    label: "About Us",
    links: [
      { label: "Our Story", href: "/about-us" },
      { label: "Conscious travel", href: "/about-us#conscious-travel" },
      { label: "Team", href: "/our-team" },
      { label: "Career", href: "/careers" },
    ],
    image: {
      src: "/images/mega-menu/about-us.jpg",
      alt: "The Cosa team",
    },
  },
  {
    key: "contact",
    label: "Contact",
    links: [
      { label: "General Inquiries", href: "/contact" },
      { label: "Departments", href: "/contact#departments" },
    ],
    image: {
      src: "/images/mega-menu/contact.jpg",
      alt: "Get in touch with Cosa Travel",
    },
  },
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

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const [previewKey, setPreviewKey] = useState(MENU_SECTIONS[0].key);

  const preview =
    MENU_SECTIONS.find((section) => section.key === previewKey) ??
    MENU_SECTIONS[0];

  // Close dropdowns and menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
    setCurrencyOpen(false);
  }, [pathname]);

  // Close menu with Escape key
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Reset menu preview when menu opens
  useEffect(() => {
    if (menuOpen) {
      setPreviewKey(MENU_SECTIONS[0].key);
    }
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-7">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-8">

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="group flex flex-col gap-[5px] transition-all duration-300"
            >
              <span className="block h-[1.5px] w-6 bg-white transition-colors duration-300 group-hover:bg-[#182D27]" />
              <span className="block h-[1.5px] w-6 bg-white transition-colors duration-300 group-hover:bg-[#182D27]" />
              <span className="block h-[1.5px] w-6 bg-white transition-colors duration-300 group-hover:bg-[#182D27]" />
            </button>

            {/* CALL US */}
            <a
              href="tel:+41000000000"
              className="hidden items-center gap-2 text-sm tracking-wide text-white transition-colors duration-300 hover:text-[#182D27] sm:flex"
            >
              <FiPhone className="h-4 w-4" />
              Call Us
            </a>
          </div>

          {/* ================= COSA LOGO ================= */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl tracking-[0.25em] text-white transition-colors duration-300 hover:text-[#182D27]"
          >
            COSA
          </Link>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-5">

            {/* LANGUAGE */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangOpen((value) => !value);
                  setCurrencyOpen(false);
                }}
                aria-label="Language"
                className="text-white transition-colors duration-300 hover:text-[#182D27]"
              >
                <TbWorld className="h-5 w-5" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language.code}
                      className="block w-full rounded-md px-3 py-1.5 text-left text-sm text-slate-600 transition-colors hover:bg-slate-50"
                    >
                      {language.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CURRENCY */}
            <div className="relative">
              <button
                onClick={() => {
                  setCurrencyOpen((value) => !value);
                  setLangOpen(false);
                }}
                aria-label="Currency"
                className="text-white transition-colors duration-300 hover:text-[#182D27]"
              >
                <TbWorld className="h-5 w-5" />
              </button>

              {currencyOpen && (
                <div className="absolute right-0 mt-3 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  {CURRENCIES.map((currency) => (
                    <button
                      key={currency.code}
                      className="block w-full rounded-md px-3 py-1.5 text-left text-sm text-slate-600 transition-colors hover:bg-slate-50"
                    >
                      {currency.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SEARCH */}
            <button
              aria-label="Search"
              className="text-white transition-colors duration-300 hover:text-[#182D27]"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            {/* HEART */}
            <button
              aria-label="Saved trips"
              className="text-white transition-colors duration-300 hover:text-[#182D27]"
            >
              <FiHeart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= FULL SCREEN MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#FAF8F3]">

          {/* MENU TOP BAR */}
          <div className="flex items-center justify-between px-8 py-7">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl tracking-[0.25em] text-[#182D27]"
            >
              COSA
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-slate-600 transition-colors duration-300 hover:text-[#182D27]"
            >
              <FiX className="h-7 w-7" />
            </button>
          </div>

          {/* MENU BODY */}
          <div className="mx-auto grid w-full max-w-[1800px] flex-1 grid-cols-1 gap-10 px-8 pb-16 pt-4 lg:grid-cols-[1.4fr_1fr]">

            {/* LEFT MENU */}
            <div className="flex flex-col justify-center gap-8">
              {MENU_SECTIONS.map((section) => (
                <div
                  key={section.key}
                  onMouseEnter={() => setPreviewKey(section.key)}
                  onFocus={() => setPreviewKey(section.key)}
                >
                  <h2 className="font-serif text-2xl font-light leading-none text-slate-500 transition-colors sm:text-6xl">
                    {section.label}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg text-slate-600 transition-colors duration-300 hover:text-[#182D27]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT PREVIEW IMAGE */}
            <div className="relative hidden h-full min-h-[420px] w-full overflow-hidden lg:block">
              <Image
                key={preview.key}
                src={preview.image.src}
                alt={preview.image.alt}
                fill
                sizes="35vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
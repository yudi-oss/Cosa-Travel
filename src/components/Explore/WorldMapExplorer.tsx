"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { FiPhone, FiSearch, FiHeart } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const PINS = [
  { top: "18%", left: "62%", count: 2, lat: 46, lon: 7 },
  { top: "16%", left: "78%", count: 2, lat: 41, lon: 127 },
  { top: "34%", left: "70%", count: 5, lat: 27, lon: 85 },
  { top: "40%", left: "82%", count: 7, lat: 36, lon: 138 },
  { top: "44%", left: "76%", count: 4, lat: 20, lon: 106 },
  { top: "44%", left: "70%", count: 3, lat: 24, lon: 90 },
  { top: "56%", left: "80%", count: 2, lat: -2, lon: 122 },
  { top: "60%", left: "72%", count: 10, lat: -8, lon: 115 },
  { top: "62%", left: "77%", count: 3, lat: -6, lon: 107 },
];

const REGION_LABELS = [
  { top: "23%", left: "42%", label: "Arctic Ocean" },
  { top: "38%", left: "52%", label: "Northern Europe" },
  { top: "46%", left: "60%", label: "Eastern Europe" },
  { top: "44%", left: "36%", label: "Western Europe" },
  { top: "48%", left: "68%", label: "Central Asia" },
  { top: "50%", left: "26%", label: "USA & Canada" },
];

export default function WorldMapExplorer() {
  const [mode, setMode] = useState<"inspirations" | "world">("world");

  return (
    <section className="relative w-full h-[640px] overflow-hidden bg-[#dfe4e1]">
      {/* Interactive world map */}
      <div className="absolute inset-0">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 210 }}
          width={1440}
          height={700}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#f8f7f4"
                  stroke="#c8d0cb"
                  strokeWidth={0.5}
                />
              ))
            }
          </Geographies>

          {PINS.map((pin) => (
            <Marker key={`${pin.lat}-${pin.lon}`} coordinates={[pin.lon, pin.lat]}>
              <circle r={5} fill="#1c1c1a" className="cursor-pointer hover:fill-[#c1603c] transition-colors" />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-12 pt-8">
        <div className="flex items-center gap-8">
          <button className="flex flex-col gap-1" aria-label="Menu">
            <span className="w-6 h-px bg-neutral-800" />
            <span className="w-6 h-px bg-neutral-800" />
          </button>
          <span className="flex items-center gap-2 text-[13px] text-neutral-800">
            <FiPhone className="w-4 h-4" /> Call Us
          </span>
        </div>

        <span className="font-heading italic text-[26px] text-neutral-900">
          Cosa
        </span>

        <div className="flex items-center gap-5 text-neutral-800">
          <TbWorld className="w-[18px] h-[18px]" />
          <TbWorld className="w-[18px] h-[18px]" />
          <FiSearch className="w-[18px] h-[18px]" />
          <FiHeart className="w-[18px] h-[18px]" />
        </div>
      </div>

      {/* Region labels */}
      {REGION_LABELS.map((r) => (
        <span
          key={r.label}
          style={{ top: r.top, left: r.left }}
          className="absolute z-10 -translate-x-1/2 text-[11px] uppercase tracking-wide text-neutral-600"
        >
          {r.label}
        </span>
      ))}

      {/* Legend + controls */}
      <div className="absolute left-8 md:left-12 top-[38%] z-10 bg-white/90 backdrop-blur-sm p-5 w-[220px]">
        <ul className="space-y-2 mb-4 text-[13px] text-neutral-800">
          <li className="flex items-center gap-2">
            <span className="text-neutral-500">◆</span> Country
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 border border-neutral-800" /> Destination
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400" /> Experience
          </li>
        </ul>
        <button className="w-full bg-neutral-900 text-white text-[11px] uppercase tracking-wide py-2.5 mb-2 hover:bg-neutral-700 transition-colors cursor-pointer">
          Show as list
        </button>
        <button className="w-full border border-neutral-900 text-neutral-900 text-[11px] uppercase tracking-wide py-2.5 hover:border-neutral-600 hover:text-neutral-600 transition-colors cursor-pointer">
          Search
        </button>
      </div>

      {/* Mode toggle card */}
      <div className="absolute right-8 md:right-12 top-[46%] z-10 bg-white shadow-lg flex items-center gap-6 px-6 py-5">
        <div className="text-center">
          <p className="text-[11px] text-neutral-500 mb-1">Inspirations</p>
          <p className="text-[13px] text-neutral-900">2026</p>
        </div>
        <button
          onClick={() => setMode(mode === "world" ? "inspirations" : "world")}
          className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${
            mode === "world" ? "bg-neutral-800" : "bg-neutral-300"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              mode === "world" ? "translate-x-[22px]" : "translate-x-0.5"
            }`}
          />
        </button>
        <div className="text-center">
          <p className="font-heading italic text-[15px] text-neutral-900">
            Explore
          </p>
          <p className="text-[11px] uppercase tracking-wide text-neutral-500">
            The World
          </p>
        </div>
      </div>
    </section>
  );
}

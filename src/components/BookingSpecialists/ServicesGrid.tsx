"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

type Item = {
  title: string;
  image: string;
  copy: string;
  button?: string;
  modalBody?: string;
};

type Row = {
  heading: string;
  items: [Item, Item, Item];
};

const IMG_GROUP =
  "/Bookingspecialist/staynight.png";
const IMG_FIRE =
  "/Bookingspecialist/luxaryvillas.png";

const IMG_RAFT =
  "/Bookingspecialist/uniqueglamping.png";

const ROWS: Row[] = [
  {
    heading: "Stay the night",
    items: [
      {
        title: "Premium hotels",
        image: IMG_GROUP,
        copy:
          "If you're looking for exclusive hotels that effortlessly combine comfort and service, then look no further. We know the right ones for you.",
      },
      {
        title: "Luxury villas",
        image: IMG_FIRE,
        copy:
          "A family house by the sea or a romantic chalet in the mountains? We have luxury properties for every occasion, no matter how many are staying.",
        button: "Want To Know More?",
        modalBody:
          "From beachfront villas in the Mediterranean to ski chalets in the Alps, we curate a private portfolio of luxury properties and match you to the right one for your group, your dates and your budget — then handle every booking detail for you.",
      },
      {
        title: "Unique glamping",
        image: IMG_RAFT,
        copy:
          "Maybe you'd like something different, something adventurous yet still luxurious. We can guide you to our favourite glamping spots.",
      },
    ],
  },

  {
    heading: "Take to the skies",
    items: [
      {
        title: "Airline tickets",
        image: IMG_GROUP,
        copy:
          "Wherever you want to fly, we can book it for you, whether it's a weekend city break or a round-the-world adventure. Come fly with us.",
      },
      {
        title: "Private jets",
        image: IMG_FIRE,
        copy:
          "For the ultimate in exclusive travel, why not charter a private jet? There's nothing quite like joining the jet-set to make you feel special.",
        button: "Take Me Away",
        modalBody:
          "We work with a network of private charter operators to arrange the aircraft, routing and ground handling for your trip.",
      },
      {
        title: "Special requests",
        image: IMG_RAFT,
        copy:
          "Let your travel fantasies take flight, with a hot-air balloon ride, a helicopter tour or even a spot of paragliding. The sky's the limit.",
      },
    ],
  },

  {
    heading: "Out on the water",
    items: [
      {
        title: "Cruise ships",
        image: IMG_GROUP,
        copy:
          "From a relaxing river trip to a grand exploration of the high seas, we can find the perfect cruise and the perfect ship for you.",
      },
      {
        title: "Private yachts",
        image: IMG_FIRE,
        copy:
          "Sailing from port to port or island to island in a private yacht. If that sounds like a dream, it's a dream we can make come true for you.",
        button: "All Abroad",
        modalBody:
          "Tell us where you'd like to sail and how many are joining you, and we'll shortlist yachts, crews and routes to match.",
      },
      {
        title: "Ferry tickets",
        image: IMG_RAFT,
        copy:
          "Going by boat can be the quickest, and nicest, way to travel, whether you're island hopping or taking the scenic route.",
      },
    ],
  },

  {
    heading: "Road and rail",
    items: [
      {
        title: "Car rental",
        image: IMG_GROUP,
        copy:
          "The ultimate road trip or a drive along the coast? A snazzy sports car or a practical people carrier? We can organise anything you want.",
      },
      {
        title: "Train trips",
        image: IMG_FIRE,
        copy:
          "We're experts in train travel, no matter if you're going away for a few days or travelling across Siberia.",
        button: "Show Me The Way",
        modalBody:
          "From scenic Swiss panoramic routes to grand cross-continental journeys, we book the tickets, sleeper cabins and connections.",
      },
      {
        title: "Seamless transfers",
        image: IMG_RAFT,
        copy:
          "After a long flight or dusty journey, there's nothing better than being whisked off to your hotel. Our transfers leave nothing to chance.",
      },
    ],
  },

  {
    heading: "Complete service",
    items: [
      {
        title: "Visas & forms",
        image: IMG_GROUP,
        copy:
          "Travelling can often be complicated, with every country having its own rules and visas. Cosa will help you navigate all the red tape.",
      },
      {
        title: "Tickets & tours",
        image: IMG_FIRE,
        copy:
          "Seats at a Grand Slam or Grand Prix? We can get them. A box at the theatre? No problem. A private guide? We know the best.",
        button: "Let Us Help",
        modalBody:
          "Whatever's on your wish list — sporting finals, opening nights, private guided tours — let us know and we'll use our network to secure access.",
      },
      {
        title: "Help & advice",
        image: IMG_RAFT,
        copy:
          "We don't just book your trip, we look after you all the way. We'll manage your schedule, solve your problems and be flexible when things change.",
      },
    ],
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <>
      {ROWS.map((row) => (
        <section
          key={row.heading}
          className="bg-[#f8f7f4] pb-28"
        >
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">

            {/* Heading */}
            <h2
              className="
                font-heading
                italic
                font-light
                text-[32px]
                md:text-[36px]
                text-neutral-900
                mb-16
              "
            >
              {row.heading}
            </h2>

            {/* Cards */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-x-8
                gap-y-16
                items-start
              "
            >
              {row.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    w-full
                    ${index === 1 ? "md:-translate-y-36" : ""}
                  `}
                >
                  {/* Image */}
                  <div
                    className="
                      w-full
                      aspect-[1.45/1]
                      bg-cover
                      bg-center
                      mb-4
                    "
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  />

                  {/* Title */}
                  <h3
                    className="
                      text-[17px]
                      md:text-[18px]
                      font-normal
                      text-neutral-900
                      mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-[14px]
                      md:text-[15px]
                      leading-[1.55]
                      text-neutral-600
                      max-w-[360px]
                    "
                  >
                    {item.copy}
                  </p>

                  {/* Button */}
                  {item.button && (
                    <button
                      onClick={() => setActive(item)}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        justify-center
                        border
                        border-neutral-400
                        rounded-full
                        px-7
                        py-3
                        text-[13px]
                        text-neutral-900
                        bg-transparent
                        hover:bg-neutral-900
                        hover:text-white
                        hover:border-neutral-900
                        transition-all
                        duration-300
                        cursor-pointer
                      "
                    >
                      {item.button}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
      >
        <p>{active?.modalBody}</p>
      </Modal>
    </>
  );
}
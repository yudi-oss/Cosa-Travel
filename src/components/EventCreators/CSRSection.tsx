"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";
import StoryCTARow from "./StoryCTARow";

export default function CSRSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StoryCTARow
        heading="Corporate Social Responsibility"
        copy="Cosa events are all about enjoyment but they can also include an element of giving back to the local community. We choose hands-on projects with a lasting environmental or social impact, such as building new facilities for a school in South Africa. Ask us for details."
        image="https://picsum.photos/seed/cosa-ec-csr/1000/750"
        buttonLabel="Learn more about our CSR"
        onButtonClick={() => setOpen(true)}
        reverse
      />

      <Modal open={open} onClose={() => setOpen(false)} title="Our CSR approach">
        <p className="mb-4">
          We believe an unforgettable event can also leave a lasting mark
          somewhere else. Where it fits the itinerary, we build a hands-on
          giving-back element into the programme — planting, building or
          teaching alongside a local community partner, not just writing a
          cheque.
        </p>
        <p>
          Past projects have included building new classroom facilities for
          a school in South Africa and coastal clean-up days folded into
          group travel itineraries. Ask your event creator for options that
          suit your group and destination.
        </p>
      </Modal>
    </>
  );
}

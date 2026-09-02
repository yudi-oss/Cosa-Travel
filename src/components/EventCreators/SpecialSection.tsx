"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";
import StoryCTARow from "./StoryCTARow";

export default function SpecialSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StoryCTARow
        heading="What makes Cosa events special"
        copy="How does a Cosa event take shape? First you tell us what you'd like so our creative minds can get going. We present you with ideas, and once you've decided, we work on planning every detail, from food to fun (we never forget that). We go above and beyond for our clients, ensuring every aspect of every event is meticulously crafted to exceed expectations."
        image="https://picsum.photos/seed/cosa-ec-camels/1000/750"
        buttonLabel="Learn How We Do It"
        onButtonClick={() => setOpen(true)}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="How we do it"
      >
        <p className="mb-4">
          Every Cosa event starts with a conversation. You tell us the
          occasion, the guest list and the mood you&apos;re after — nothing
          more is needed to get our creative team moving.
        </p>
        <p className="mb-4">
          We come back with concepts, not just quotes: venues, activities,
          catering and entertainment options tailored to your brief. Once
          you&apos;ve chosen a direction, we plan every detail ourselves,
          from transport and permits to the final souvenir video, so nothing
          is left for you to chase up.
        </p>
        <p>
          On the day, a Cosa team member is always on hand, so you get to
          enjoy the event as a guest rather than run it as an organiser.
        </p>
      </Modal>
    </>
  );
}

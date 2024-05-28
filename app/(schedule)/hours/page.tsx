// components/ui/scheduling.tsx

"use client"

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";

const timeSlots = [
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
];

export default function Hours() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h2>Lunes 23</h2>

      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2">
          <div className="text-left">Mañana</div>
          <ToggleGroup
            slots={timeSlots.slice(0, 2)}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="text-left">Tarde</div>
          <ToggleGroup
            slots={timeSlots.slice(2)}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </div>
      </div>
    </div>
  );
}

function ToggleGroup({
  slots,
  selectedSlot,
  setSelectedSlot,
}: {
  slots: string[];
  selectedSlot: string | null;
  setSelectedSlot: (slot: string | null) => void;
}) {
  return (
    <>
      {slots.map((slot, index) => (
        <div key={slot}>
          <Toggle
            pressed={selectedSlot === slot}
            onPressedChange={(pressed) => setSelectedSlot(pressed ? slot : null)}
            className={`border p-2 rounded-md w-full ${
              selectedSlot === slot ? "bg-gray-300" : ""
            }`}
          >
            {slot}
          </Toggle>

          {selectedSlot === slot && (
            <Button className="mt-2 mb-2 w-full" variant="default">
              Agendar
            </Button>
          )}
        </div>
      ))}
    </>
  );
}

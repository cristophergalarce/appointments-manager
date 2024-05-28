// components/ui/scheduling.tsx

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

export function Scheduling() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-semibold">Lunes 23</h2>

      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2">
          <div className="text-center">Mañana</div>
          <ToggleGroup
            slots={timeSlots.slice(0, 2)}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="text-center">Tarde</div>
          <ToggleGroup
            slots={timeSlots.slice(2)}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </div>
      </div>

      {selectedSlot && (
        <Button className="mt-4" variant="default">
          Agendar
        </Button>
      )}
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
      {slots.map((slot) => (
        <Toggle
          key={slot}
          pressed={selectedSlot === slot}
          onPressedChange={(pressed) =>
            setSelectedSlot(pressed ? slot : null)
          }
          className={`border p-2 rounded-md w-full ${
            selectedSlot === slot ? "bg-gray-300" : ""
          }`}
        >
          {slot}
        </Toggle>
      ))}
    </>
  );
}

// components/hours-available.tsx

import React, { useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";

interface HoursAvailableProps {
  date: Date | undefined;
  availableHours: string[];
  onHourSelect: (hour: string) => void;
  onSchedule: () => void;
  selectedHour: string | null;
}

export function HoursAvailable({ 
  date, 
  availableHours, 
  onHourSelect, 
  onSchedule,
  selectedHour
}: HoursAvailableProps) {
  const morningHours = availableHours.filter(hour => parseInt(hour.split(':')[0]) < 12);
  const afternoonHours = availableHours.filter(hour => parseInt(hour.split(':')[0]) >= 12);

  const handleSlotSelect = (slot: string) => {
    console.log("Slot seleccionado en HoursAvailable:", slot); // Para depuración
    onHourSelect(slot);  // Siempre seleccionamos el slot, no alternamos
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-1/3 max-w-[325px]">
      <h2 className="text-lg font-semibold">
        {date ? date.toLocaleDateString() : "Selecciona una fecha"}
      </h2>

      {date && (
        <>
          <div className="flex flex-col space-y-2 w-full">
            {morningHours.length > 0 && (
              <div className="flex flex-col space-y-2">
                <div className="text-center">Mañana</div>
                <ToggleGroup
                  slots={morningHours}
                  selectedSlot={selectedHour}
                  onSlotSelect={handleSlotSelect}
                />
              </div>
            )}

            {afternoonHours.length > 0 && (
              <div className="flex flex-col space-y-2">
                <div className="text-center">Tarde</div>
                <ToggleGroup
                  slots={afternoonHours}
                  selectedSlot={selectedHour}
                  onSlotSelect={handleSlotSelect}
                />
              </div>
            )}
          </div>

          <Button 
            className="mt-4 w-full" 
            variant="default" 
            onClick={onSchedule} 
            disabled={!selectedHour}
          >
            Agendar
          </Button>
        </>
      )}
    </div>
  );
}

interface ToggleGroupProps {
  slots: string[];
  selectedSlot: string | null;
  onSlotSelect: (slot: string) => void;
}

function ToggleGroup({ slots, selectedSlot, onSlotSelect }: ToggleGroupProps) {
  return (
    <>
      {slots.map((slot) => (
        <Toggle
          key={slot}
          pressed={selectedSlot === slot}
          onPressedChange={(pressed) => {
            console.log("Toggle pressed for slot:", slot, "Pressed:", pressed); // Para depuración
            if (pressed) {
              onSlotSelect(slot);
            }
          }}
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
// components/ui/calendar-available.tsx

import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

interface CalendarAvailableProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  availableDays: number[];
}

export function CalendarAvailable({
  selected,
  onSelect,
  availableDays,
}: CalendarAvailableProps) {
  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={(range: DateRange | Date | undefined) => {
        if (range instanceof Date) {
          onSelect(range);
        } else if (range?.from) {
          onSelect(range.from);
        } else {
          onSelect(undefined);
        }
      }}
      disabled={(date) => date < new Date() || !availableDays.includes(date.getDate())}
      className="w-full max-w-md mx-auto"
    />
  );
}

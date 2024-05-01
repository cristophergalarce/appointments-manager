// app/schedule/availability/page.tsx
"use client"
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
// Asumiendo que importas correctamente desde Shadcn
import { DayModifiers } from 'react-day-picker';

export default function Availability() {
  const [selectedDays, setSelectedDays] = useState([]);  // Maneja múltiples fechas seleccionadas

  const handleDayClick = (day, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const selectedIndex = selectedDays.findIndex(selectedDay =>
      Date.parse(selectedDay) === Date.parse(day)
    );
    let newSelectedDays;
    if (selectedIndex > -1) {
      newSelectedDays = selectedDays.slice(0, selectedIndex).concat(selectedDays.slice(selectedIndex + 1));
    } else {
      newSelectedDays = [...selectedDays, day];
    }
    setSelectedDays(newSelectedDays);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center my-4">Disponibilidad</h1>
      <Calendar
        selected={selectedDays}
        onSelect={handleDayClick}
        modifiers={{
          disabled: { daysOfWeek: [0, 6] },  // Deshabilita los domingos y sábados
        }}
      />
    </div>
  );
}

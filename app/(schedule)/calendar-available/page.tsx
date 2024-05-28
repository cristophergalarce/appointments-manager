"use client";

import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import EventInfo from "@/components/event-info";

const CalendarAvailable = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex space-x-10">
      {/* Información del evento */}
      <EventInfo
        userName="Alice Wonder"
        eventName="Una cita de maravilla"
        eventDate=""
        eventTime=""
        eventLocation="Online (el detalle lo verás en tu email)"
        eventDuration="45 minutos"
      />
      {/* Calendario */}
      <div className="flex-grow">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      {/* Horarios disponibles */}
      <div className="w-1/3 max-w-[325px] space-y-4 p-4">
        <div className="text-sm font-medium">Lunes 23</div>
        <div>
          <div className="text-sm font-medium">Mañana</div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full">11:00 am</Button>
            <Button variant="outline" className="w-full">12:00 pm</Button>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-medium">Tarde</div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full">1:00 pm</Button>
            <Button variant="outline" className="w-full">2:00 pm</Button>
            <Button variant="outline" className="w-full">3:00 pm</Button>
            <Button variant="outline" className="w-full">4:00 pm</Button>
            <Button variant="outline" className="w-full">5:00 pm</Button>
          </div>
        </div>
        {/* Sección de noche, si es necesario */}
        {/* <div className="mt-4">
            <div className="text-sm font-medium">Noche</div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">7:00 pm</Button>
              <Button variant="outline" className="w-full">8:00 pm</Button>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default CalendarAvailable;
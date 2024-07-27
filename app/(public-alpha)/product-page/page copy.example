"use client";

import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { CalendarPlus } from 'lucide-react';
import EventCard from '@/components/event-card';
import { useRouter } from 'next/navigation';
import { Event, DBEvent, dbEventToEvent } from "@/types";
import { supabase } from "@/lib/supabaseClient";

const ProductPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*');

      if (error) {
        console.error('Error fetching events:', error);
        return;
      }

      if (data) {
        const fetchedEvents: Event[] = data.map((dbEvent: DBEvent) => dbEventToEvent(dbEvent));
        setEvents(fetchedEvents);
      }
    };

    fetchEvents();
  }, []);

  const handleEventSelect = (event: Event) => {
    router.push(`/calendar-available/${event.id}`);
  };

  return (
    <>
      {/* Hero */}
      <section className="text-center">
        <div className="mb-4 flex flex-col items-center">
          <Badge variant="secondary">Proyecto Portfolio</Badge>
          <span className="mt-2 text-lg font-semibold">Agendamientos</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold">Crea eventos</h1>
        <h1 className="text-4xl lg:text-5xl font-bold">Recibe agendamientos</h1>
        <p className="mt-2 text-lg text-gray-500">Crea eventos para que la gente que invites reserve en tu agenda</p>
        <Button className="mt-4" variant="default">
          <CalendarPlus className="mr-2 w-4 h-4" />
          Crear evento
        </Button>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Ejemplos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              hostName={event.hostName}
              eventName={event.eventName}
              eventDuration={event.eventDuration}
              eventPrice={event.eventPrice}
              onClick={() => handleEventSelect(event)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
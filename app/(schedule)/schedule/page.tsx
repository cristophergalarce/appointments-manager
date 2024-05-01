// app/(schedule)/page.tsx
"use client"

import { useEffect, useState } from 'react';
import EventCard from '@/components/Events/event-card'
import { supabase } from '@/supabaseClient';

export default function Schedule() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      let { data: events, error } = await supabase
        .from('events')
        .select('*');
      if (error) console.log("error", error);
      else setEvents(events);
    }

    loadEvents();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center my-4">Perfil de Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} title={event.title} duration={event.duration} price={event.price} description={event.description} />
        ))}
      </div>
    </div>
  );
}

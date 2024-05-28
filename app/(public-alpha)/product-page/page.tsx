import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { CalendarPlus } from 'lucide-react';
import EventCard from '@/components/event-card';

const services = [
  { userName: "Alice Wonder", name: "Una cita de maravilla", duration: "45m", price: "$0" },
  { userName: "Alice Wonder", name: "Trekking Manquehuito", duration: "7h", price: "$25.000" },
  { userName: "Alice Wonder", name: "Asesoría Growth", duration: "7h", price: "$25.000" },
  { userName: "Alice Wonder", name: "Job Interview: Full Time", duration: "1h", price: "$0" },
  // Más servicios...
];

const ProductPage = () => {

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
          {services.map((service, index) => (
            <EventCard
              key={index}
              userName={service.userName}
              eventName={service.name}
              eventDuration={service.duration}
              eventPrice={service.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductPage;

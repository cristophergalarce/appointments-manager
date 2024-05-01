// app/components/Events/event-card.tsx
import React from 'react';

// Definición de tipo para los props del evento
type EventProps = {
  title: string;
  duration: string;
  price: string;
  description?: string; // Opcional
};

const EventCard: React.FC<EventProps> = ({ title, duration, price, description }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{duration}</p>
      <p>{price}</p>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );
};

export default EventCard;
  
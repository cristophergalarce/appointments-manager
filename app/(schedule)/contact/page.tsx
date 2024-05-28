"use client";

import * as React from "react";
import EventInfo from "@/components/event-info";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
      <div className="max-w-[801px] mx-auto flex space-x-4">
        {/* Información de evento */}
        <EventInfo
          userName="Alice Wonder"
          eventName="Una cita de maravilla"
          eventDate="Lunes, 23 de enero de 2023"
          eventTime="De 5:00 pm a 6:00 pm horas (hora de verano de Chile)"
          eventLocation="Online (el detalle lo verás en tu email)"
          eventDuration="45 minutos"
        />
        {/* Formulario de contacto */}
        <form className="space-y-4 py-4 px-10">
          <h2 className="text-lg font-semibold">Ingresa tu contacto para agendar</h2>
          <Input type="email" placeholder="Email" className="w-full" />
          <Input type="text" placeholder="Nombre y Apellido" className="w-full" />
          <Button variant="outline" className="w-full">Agregar otros datos</Button>
          <Button type="submit" variant="default" className="w-full">Agendar</Button>
          <p className="text-sm text-gray-500">
            Solo usaremos tu contacto para notificarte a ti y a quien organiza el evento sobre tu agendamiento.
          </p>
        </form>
      </div>
  );
};

export default Contact;
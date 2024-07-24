"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Reservation, Event } from "@/types";
import { useParams } from 'next/navigation';

const Confirmation: React.FC = () => {
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [event, setEvent] = useState<Event | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const confirmedReservationData = localStorage.getItem('confirmedReservation');
    if (confirmedReservationData) {
      const parsedData = JSON.parse(confirmedReservationData);
      if (parsedData.id.toString() === params.id) {
        setReservation({
          id: parsedData.id,
          eventId: parsedData.event_id,
          participantName: parsedData.participant_name,
          participantEmail: parsedData.participant_email,
          scheduledDate: parsedData.scheduled_date,
          scheduledTime: parsedData.scheduled_time,
        });
        setEvent(parsedData.event);
      } else {
        router.push('/calendar-available');
      }
    } else {
      router.push('/calendar-available');
    }
  }, [router, params.id]);

  if (!reservation || !event) return <div>Cargando...</div>;

  const endTime = calculateEndTime(reservation.scheduledTime, event.eventDuration);

  return (
    <div className="max-w-[540px] mx-auto space-y-10">
      <Card className="text-center">
        <CardHeader className="p-10">
          <CalendarIcon className="h-12 w-12 mx-auto text-gray-500" />
          <CardTitle className="text-2xl font-bold mt-4">Agendamiento realizado con éxito</CardTitle>
          <p className="text-gray-500 mt-2">
            Te enviamos una invitación con todos los detalles a tu email ({reservation.participantEmail})
          </p>
        </CardHeader>
        <CardContent className="space-y-4 text-left p-10 pt-0">
          <div>
            <p>Evento:</p>
            <p>{event.eventName}</p>
          </div>
          <div>
            <p>Cuándo:</p>
            <p>{new Date(reservation.scheduledDate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <br />
            <p>De {reservation.scheduledTime} a {endTime} horas (hora de verano de Chile)</p>
          </div>
          <div>
            <p>Dónde:</p>
            <p>{event.eventLocation}</p>
          </div>
          <div>
            <p>Organiza:</p>
            <p>{event.hostName}</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">¿Necesitas hacer un cambio?</p>
            <div className="flex space-x-4 justify-center mt-2">
              <Button variant="outline">Reagendar</Button>
              <Button variant="outline">Anular</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-center mt-10">
        <p className="text-gray-500 mb-4">
          Tú también puedes recibir agendamientos creando eventos gratis en este proyecto
        </p>
        <Button variant="default">
          Crear evento
        </Button>
      </div>
    </div>
  );
};

// Función auxiliar para calcular la hora de finalización
function calculateEndTime(startTime: string, duration: string): string {
  const [hours, minutes] = startTime.split(':').map(Number);
  const durationInMinutes = parseInt(duration);
  const endDate = new Date(2000, 0, 1, hours, minutes + durationInMinutes);
  return endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default Confirmation;